<script>
import first from "lodash-es/first";

export default {
    props: {
        default: {
            type: Object,
            required: true,
        },
    },

    data() {
        return {
            toggles: { ...this.default },
        };
    },

    methods: {
        toggled(key) {
            return this.toggles[key] ?? false;
        },

        toggle(key) {
            this.setToggle(key, !this.toggled(key));
        },

        setToggle(key, value) {
            this.toggles[key] = value;
        }
    },

    render() {
        const self = this;

        return this.$slots.default(
            new Proxy(
                {},
                {
                    ownKeys() {
                        return Object.keys(self.toggles);
                    },
                    get(target, name) {
                        const toggleKeys = Object.keys(self.toggles);

                        // This is a shortcut so you don't have to use the 'default' key.
                        if(toggleKeys.length === 1 && first(toggleKeys) === "default") {
                            if (name === "toggled") {
                                return self.toggled("default");
                            }

                            if (name === "setToggle") {
                                return (value) => {
                                    self.setToggle("default", value);
                                };
                            }

                            if (name === "toggle") {
                                return () => {
                                    self.toggle("default");
                                };
                            }
                        }

                        if (name === "setToggle") {
                            return (key, value) => {
                                self.setToggle(key, value);
                            };
                        }

                        if (name === "toggle") {
                            return (key) => {
                                self.toggle(key);
                            };
                        }

                        return self.toggled(name);
                    },
                }
            )
        );
    },
};
</script>
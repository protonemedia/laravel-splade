<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */

    'accepted'             => 'يجب قبول :attribute',
    //The :attribute must be accepted when :other is :value.
    'accepted_if'          => 'الحقل :attribute يجب أن يكون مقبولاً عندما :other هو :value.',
    'active_url'           => 'الحقل :attribute ليس عنوان موقع إلكتروني صحيح.',
    'after'                => 'الحقل :attribute يجب أن يكون تاريخاً بعد :date.',
    'after_or_equal'       => 'الحقل :attribute يجب أن يكون تاريخاً بعد أو يساوي :date.',
    'alpha'                => 'الحقل :attribute قد يحتوي فقط على حروف.',
    'alpha_dash'           => 'الحقل :attribute قد يحتوي فقط على حروف, أرقام, وشرطات.',
    'alpha_num'            => 'الحقل :attribute قد يحتوي فقط على حروف وأرقام.',
    'array'                => 'الحقل :attribute يجب أن يكون مصفوفة.',
    'before'               => 'الحقل :attribute يجب أن يكون تاريخاً قبل :date.',
    'before_or_equal'      => 'الحقل :attribute يجب أن يكون تاريخاً قبل أو يساوي :date.',
    'between'              => [
        'array'   => 'الحقل :attribute يجب أن يحتوي على :min - :max عنصر.',
        'file'    => 'الحقل :attribute يجب أن يكون بين :min - :max كيلوبايت.',
        'numeric' => 'الحقل :attribute يجب أن يكون بين :min - :max.',
        'string'  => 'الحقل :attribute يجب أن يكون بين :min - :max حرف.',
    ],
    'boolean'              => 'الحقل :attribute يجب أن يكون true أو false.',
    'confirmed'            => 'تأكيد الحقل :attribute غير متطابق.',
    'current_password'     => 'كلمة المرور غير صحيحة.',
    'date'                 => 'الحقل :attribute ليس تاريخاً صحيحاً.',
    'date_equals'          => 'الحقل :attribute يجب أن يكون تاريخاً يساوي :date.',
    'date_format'          => 'الحقل :attribute لا يتوافق مع الشكل :format.',
    'declined'             => 'الحقل :attribute تم رفضه.',
    'declined_if'          => 'الحقل :attribute تم رفضه عندما :other هو :value.',
    'different'            => 'الحقل :attribute و :other يجب أن يكونا مختلفين.',
    'digits'               => 'الحقل :attribute يجب أن يكون رقماً :digits.',
    'digits_between'       => 'الحقل :attribute يجب أن يكون رقماً بين :min و :max.',
    'dimensions'           => 'الحقل :attribute له أبعاد صورة غير صالحة.',
    'distinct'             => 'الحقل :attribute يحتوي على قيمة مكررة.',
    'doesnt_start_with'    => 'الحقل :attribute يجب أن يبدأ بأحد القيم التالية: :values',
    'email'                => 'الحقل :attribute يجب أن يكون عنوان بريد إلكتروني صحيح.',
    'ends_with'            => 'الحقل :attribute يجب أن ينتهي بأحد القيم التالية: :values',
    'enum'                 => 'الحقل :attribute يجب أن يكون قيمة من القائمة المحددة.',
    'exists'               => 'الحقل :attribute المحدد غير صحيح.',
    'file'                 => 'الحقل :attribute يجب أن يكون ملفاً.',
    'filled'               => 'الحقل :attribute إجباري.',
    'gt'                   => [
        'array'   => 'الحقل :attribute يجب أن يحتوي على أكثر من :value عناصر.',
        'file'    => 'الحقل :attribute يجب أن يكون أكبر من :value كيلوبايت.',
        'numeric' => 'الحقل :attribute يجب أن يكون أكبر من :value.',
        'string'  => 'الحقل :attribute يجب أن يكون أكبر من :value حرف.',
    ],
    'gte'                  => [
        'array'   => 'الحقل :attribute يجب أن يحتوي على :value عناصر أو أكثر.',
        'file'    => 'الحقل :attribute يجب أن يكون أكبر من أو يساوي :value كيلوبايت.',
        'numeric' => 'الحقل :attribute يجب أن يكون أكبر من أو يساوي :value.',
        'string'  => 'الحقل :attribute يجب أن يكون أكبر من أو يساوي :value حرف.',
    ],
    'image'                => 'الحقل :attribute يجب أن يكون صورة.',
    'in'                   => 'الحقل :attribute المحدد غير صحيح.',
    'in_array'             => 'الحقل :attribute غير موجود في :other.',
    'integer'              => 'الحقل :attribute يجب أن يكون عدد صحيح.',
    'ip'                   => 'الحقل :attribute يجب أن يكون عنوان IP صحيح.',
    'ipv4'                 => 'الحقل :attribute يجب أن يكون عنوان IPv4 صحيح.',
    'ipv6'                 => 'الحقل :attribute يجب أن يكون عنوان IPv6 صحيح.',
    'json'                 => 'الحقل :attribute يجب أن يكون نص من نوع JSON.',
    'lt'                   => [
        'array'   => 'الحقل :attribute يجب أن يحتوي على أقل من :value عناصر.',
        'file'    => 'الحقل :attribute يجب أن يكون أصغر من :value كيلوبايت.',
        'numeric' => 'الحقل :attribute يجب أن يكون أصغر من :value.',
        'string'  => 'الحقل :attribute يجب أن يكون أصغر من :value حرف.',
    ],
    'lte'                  => [
        'array'   => 'الحقل :attribute يجب أن يحتوي على :value عناصر أو أقل.',
        'file'    => 'الحقل :attribute يجب أن يكون أصغر من أو يساوي :value كيلوبايت.',
        'numeric' => 'الحقل :attribute يجب أن يكون أصغر من أو يساوي :value.',
        'string'  => 'الحقل :attribute يجب أن يكون أصغر من أو يساوي :value حرف.',
    ],
    'mac_address'          => 'الحقل :attribute يجب أن يكون عنوان MAC صحيح.',
    'max'                  => [
        'array'   => 'الحقل :attribute قد لا يحتوي على أكثر من :max عنصر.',
        'file'    => 'الحقل :attribute قد لا يكون أكبر من :max كيلوبايت.',
        'numeric' => 'الحقل :attribute قد لا يكون أكبر من :max.',
        'string'  => 'الحقل :attribute قد لا يكون أكبر من :max حرف.',
    ],
    'mimes'                => 'الحقل :attribute يجب أن يكون ملف من نوع: :values.',
    'mimetypes'            => 'الحقل :attribute يجب أن يكون ملف من نوع: :values.',
    'min'                  => [
        'array'   => 'الحقل :attribute يجب أن يحتوي على الأقل على :min عنصر.',
        'file'    => 'الحقل :attribute يجب أن يكون أكبر من :min كيلوبايت.',
        'numeric' => 'الحقل :attribute يجب أن يكون أكبر من :min.',
        'string'  => 'الحقل :attribute يجب أن يكون أكبر من :min حرف.',
    ],
    'multiple_of'          => 'الحقل :attribute يجب أن يكون مضاعفاً من :value',
    'not_in'               => 'الحقل :attribute المحدد غير صحيح.',
    'not_regex'            => 'صيغة الحقل :attribute غير صحيحة.',
    'numeric'              => 'الحقل :attribute يجب أن يكون رقم.',
    'password'             => [
        'letters'       => 'الحقل :attribute يجب أن يحتوي على حروف.',
        'mixed'         => 'الحقل :attribute يجب أن يحتوي على حروف وأرقام.',
        'numbers'       => 'الحقل :attribute يجب أن يحتوي على أرقام.',
        'symbols'       => 'الحقل :attribute يجب أن يحتوي على رموز.',
        'uncompromised' => 'الحقل :attribute ليس آمناً بما فيه الكفاية.',
    ],
    'present'              => 'الحقل :attribute يجب أن يكون موجوداً.',
    'prohibited'           => 'الحقل :attribute ممنوع.',
    'prohibited_if'        => 'الحقل :attribute ممنوع عندما يكون :other يساوي :value.',
    'prohibited_unless'    => 'الحقل :attribute ممنوع ما لم يكن :other يساوي :values.',
    'prohibits'            => 'الحقل :attribute يمنع :other من الحقل.',
    'regex'                => 'صيغة الحقل :attribute غير صحيحة.',
    'required'             => 'الحقل :attribute مطلوب.',
    'required_array_keys'  => 'الحقل :attribute يجب أن يحتوي على الحقول :keys.',
    'required_if'          => 'الحقل :attribute مطلوب عندما يكون :other يساوي :value.',
    'required_unless'      => 'الحقل :attribute مطلوب ما لم يكن :other يساوي :values.',
    'required_with'        => 'الحقل :attribute مطلوب عندما يكون :values موجوداً.',
    'required_with_all'    => 'الحقل :attribute مطلوب عندما يكون :values موجوداً.',
    'required_without'     => 'الحقل :attribute مطلوب عندما يكون :values غير موجود.',
    'required_without_all' => 'الحقل :attribute مطلوب عندما لا يكون أحد :values موجوداً.',
    'same'                 => 'الحقل :attribute و :other يجب أن يتطابقا.',
    'size'                 => [
        'array'   => 'الحقل :attribute يجب أن يحتوي على :size عنصر.',
        'file'    => 'الحقل :attribute يجب أن يكون :size كيلوبايت.',
        'numeric' => 'الحقل :attribute يجب أن يكون :size.',
        'string'  => 'الحقل :attribute يجب أن يكون :size حرف.',
    ],
    'starts_with'          => 'الحقل :attribute يجب أن يبدأ بأحد القيم التالية: :values',
    'string'               => 'الحقل :attribute يجب أن يكون نصاً.',
    'timezone'             => 'الحقل :attribute يجب أن يكون منطقة صالحة.',
    'unique'               => 'الحقل :attribute موجود مسبقاً.',
    'uploaded'             => 'الحقل :attribute فشل في التحميل.',
    'url'                  => 'صيغة الرابط :attribute غير صحيحة.',
    'uuid'                 => 'الحقل :attribute يجب أن يكون رقم تعريف UUID صالح.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom'               => [
        'attribute-name' => [
            'rule-name' => 'custom-message',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap our attribute placeholder
    | with something more reader friendly such as "E-Mail Address" instead
    | of "email". This simply helps us make our message more expressive.
    |
    */

    'attributes'           => [],

];

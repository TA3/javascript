import type { LocalizationResource } from "@clerk/types";

const commonTexts = {
  signIn: {
    phoneCode: {
      title: "تحقق من هاتفك",
      subtitle: "للمتابعة إلى {{applicationName}}",
      formTitle: "رمز التحقق",
      formSubtitle: "أدخل رمز التحقق الذي تم إرساله إلى رقم هاتفك",
      resendButton: "لم تتلقَ رمزًا؟ أعِد الإرسال",
    },
  },
} as const;

export const arIQ: LocalizationResource = {
  locale: "ar-IQ",
  socialButtonsBlockButton: "المتابعة مع {{provider|titleize}}",
  dividerText: "أو",
  formFieldLabel__emailAddress: "عنوان البريد الإلكتروني",
  formFieldLabel__emailAddresses: "عناوين البريد الإلكتروني",
  formFieldLabel__phoneNumber: "رقم الهاتف",
  formFieldLabel__username: "اسم المستخدم",
  formFieldLabel__emailAddress_phoneNumber:
    "عنوان البريد الإلكتروني أو رقم الهاتف",
  formFieldLabel__emailAddress_username:
    "عنوان البريد الإلكتروني أو اسم المستخدم",
  formFieldLabel__phoneNumber_username: "رقم الهاتف أو اسم المستخدم",
  formFieldLabel__emailAddress_phoneNumber_username:
    "عنوان البريد الإلكتروني، رقم الهاتف أو اسم المستخدم",
  formFieldLabel__password: "كلمة المرور",
  formFieldLabel__currentPassword: "كلمة المرور الحالية",
  formFieldLabel__newPassword: "كلمة المرور الجديدة",
  formFieldLabel__confirmPassword: "تأكيد كلمة المرور",
  formFieldLabel__signOutOfOtherSessions: "تسجيل الخروج من جميع الأجهزة الأخرى",
  formFieldLabel__automaticInvitations: "تمكين الدعوات التلقائية لهذا النطاق",
  formFieldLabel__firstName: "الاسم الأول",
  formFieldLabel__lastName: "الاسم الأخير",
  formFieldLabel__backupCode: "رمز النسخ الاحتياطي",
  formFieldLabel__organizationName: "اسم المؤسسة",
  formFieldLabel__organizationSlug: "عنوان الرابط المختصر",
  formFieldLabel__organizationDomain: "النطاق",
  formFieldLabel__organizationDomainEmailAddress:
    "عنوان البريد الإلكتروني للتحقق",
  formFieldLabel__organizationDomainEmailAddressDescription:
    "أدخل عنوان بريد إلكتروني تحت هذا النطاق لاستلام رمز التحقق والتحقق من هذا النطاق.",
  formFieldLabel__organizationDomainDeletePending:
    "حذف الدعوات والاقتراحات المعلقة",
  formFieldLabel__confirmDeletion: "تأكيد",
  formFieldLabel__role: "الدور",
  formFieldInputPlaceholder__emailAddress: "",
  formFieldInputPlaceholder__emailAddresses:
    "أدخل أو الصق عددًا واحدًا أو أكثر من عناوين البريد الإلكتروني، مفصولة بفواصل أو مسافات",
  formFieldInputPlaceholder__phoneNumber: "",
  formFieldInputPlaceholder__username: "",
  formFieldInputPlaceholder__emailAddress_phoneNumber: "",
  formFieldInputPlaceholder__emailAddress_username: "",
  formFieldInputPlaceholder__phoneNumber_username: "",
  formFieldInputPlaceholder__emailAddress_phoneNumber_username: "",
  formFieldInputPlaceholder__password: "",
  formFieldInputPlaceholder__firstName: "",
  formFieldInputPlaceholder__lastName: "",
  formFieldInputPlaceholder__backupCode: "",
  formFieldInputPlaceholder__organizationName: "",
  formFieldInputPlaceholder__organizationSlug: "",
  formFieldInputPlaceholder__organizationDomain: "",
  formFieldInputPlaceholder__organizationDomainEmailAddress: "",
  formFieldError__notMatchingPasswords: "كلمتا المرور غير متطابقتين.",
  formFieldError__matchingPasswords: "كلمتا المرور متطابقتان.",
  formFieldAction__forgotPassword: "نسيت كلمة المرور؟",
  formFieldHintText__optional: "اختياري",
  formButtonPrimary: "المتابعة",
  signInEnterPasswordTitle: "أدخل كلمة المرور الخاصة بك",
  backButton: "رجوع",
  footerActionLink__useAnotherMethod: "استخدم طريقة أخرى",
  badge__primary: "أساسي",
  badge__thisDevice: "هذا الجهاز",
  badge__userDevice: "جهاز المستخدم",
  badge__otherImpersonatorDevice: "جهاز مستند آخر",
  badge__default: "الافتراضي",
  badge__unverified: "غير مُتحقق منه",
  badge__requiresAction: "يتطلب إجراء",
  badge__you: "أنت",
  footerPageLink__help: "المساعدة",
  footerPageLink__privacy: "الخصوصية",
  footerPageLink__terms: "الشروط",
  paginationButton__previous: "السابق",
  paginationButton__next: "التالي",
  paginationRowText__displaying: "عرض",
  paginationRowText__of: "من",
  membershipRole__admin: "مسؤول",
  membershipRole__basicMember: "عضو",
  membershipRole__guestMember: "زائر",
  signUp: {
    start: {
      title: "أنشئ حسابك",
      subtitle: "للمتابعة إلى {{applicationName}}",
      actionText: "هل لديك حساب؟",
      actionLink: "تسجيل الدخول",
    },
    emailLink: {
      title: "تحقق من بريدك الإلكتروني",
      subtitle: "للمتابعة إلى {{applicationName}}",
      formTitle: "رابط التحقق",
      formSubtitle:
        "استخدم الرابط التحقق الذي تم إرساله إلى عنوان بريدك الإلكتروني",
      resendButton: "لم تستلم رابطًا؟ إعادة الإرسال",
      verified: {
        title: "تم التسجيل بنجاح",
      },
      loading: {
        title: "جاري التسجيل...",
      },
      verifiedSwitchTab: {
        title: "تم التحقق من البريد الإلكتروني بنجاح",
        subtitle: "العودة إلى التبويب الجديد المفتوح للمتابعة",
        subtitleNewTab: "العودة إلى التبويب السابق للمتابعة",
      },
    },
    emailCode: {
      title: "تحقق من بريدك الإلكتروني",
      subtitle: "للمتابعة إلى {{applicationName}}",
      formTitle: "رمز التحقق",
      formSubtitle: "أدخل رمز التحقق الذي تم إرساله إلى عنوان بريدك الإلكتروني",
      resendButton: "لم تستلم رمزًا؟ إعادة الإرسال",
    },
    phoneCode: {
      title: "تحقق من هاتفك",
      subtitle: "للمتابعة إلى {{applicationName}}",
      formTitle: "رمز التحقق",
      formSubtitle: "أدخل رمز التحقق الذي تم إرساله إلى رقم هاتفك",
      resendButton: "لم تستلم رمزًا؟ إعادة الإرسال",
    },
    continue: {
      title: "املأ الحقول الناقصة",
      subtitle: "للمتابعة إلى {{applicationName}}",
      actionText: "هل لديك حساب؟",
      actionLink: "تسجيل الدخول",
    },
  },
  signIn: {
    start: {
      title: "تسجيل الدخول",
      subtitle: "للمتابعة إلى {{applicationName}}",
      actionText: "ليس لديك حساب؟",
      actionLink: "سجل الآن",
      actionLink__use_email: "استخدم البريد الإلكتروني",
      actionLink__use_phone: "استخدم الهاتف",
      actionLink__use_username: "استخدم اسم المستخدم",
      actionLink__use_email_username:
        "استخدم البريد الإلكتروني أو اسم المستخدم",
    },
    password: {
      title: "أدخل كلمة المرور الخاصة بك",
      subtitle: "للمتابعة إلى {{applicationName}}",
      actionLink: "استخدم طريقة أخرى",
    },
    forgotPasswordAlternativeMethods: {
      title: "نسيت كلمة المرور؟",
      label__alternativeMethods: "أو، قم بتسجيل الدخول باستخدام طريقة أخرى.",
      blockButton__resetPassword: "إعادة تعيين كلمة المرور",
    },
    forgotPassword: {
      title_email: "تحقق من بريدك الإلكتروني",
      title_phone: "تحقق من هاتفك",
      subtitle: "لإعادة تعيين كلمة المرور",
      formTitle: "رمز إعادة تعيين كلمة المرور",
      formSubtitle_email: "أدخل الرمز المرسل إلى عنوان بريدك الإلكتروني",
      formSubtitle_phone: "أدخل الرمز المرسل إلى رقم هاتفك",
      resendButton: "لم تستلم رمزًا؟ إعادة الإرسال",
    },
    resetPassword: {
      title: "إعادة تعيين كلمة المرور",
      formButtonPrimary: "إعادة تعيين كلمة المرور",
      successMessage:
        "تم تغيير كلمة المرور بنجاح. سوف نقوم بتسجيل دخولك، يرجى الانتظار لحظة.",
    },
    resetPasswordMfa: {
      detailsLabel: "نحن بحاجة للتحقق من هويتك قبل إعادة تعيين كلمة المرور.",
    },
    emailCode: {
      title: "تحقق من بريدك الإلكتروني",
      subtitle: "للمتابعة إلى {{applicationName}}",
      formTitle: "رمز التحقق",
      formSubtitle: "أدخل رمز التحقق المرسل إلى عنوان بريدك الإلكتروني",
      resendButton: "لم تستلم رمزًا؟ إعادة الإرسال",
    },
    emailLink: {
      title: "تحقق من بريدك الإلكتروني",
      subtitle: "للمتابعة إلى {{applicationName}}",
      formTitle: "رابط التحقق",
      formSubtitle: "استخدم الرابط التحقق المرسل إلى بريدك الإلكتروني",
      resendButton: "لم تستلم رابطًا؟ إعادة الإرسال",
      unusedTab: {
        title: "يمكنك إغلاق هذا التبويب",
      },
      verified: {
        title: "تم تسجيل الدخول بنجاح",
        subtitle: "سيتم توجيهك قريبًا",
      },
      verifiedSwitchTab: {
        subtitle: "العودة إلى التبويب الأصلي للمتابعة",
        titleNewTab: "تم تسجيل الدخول في تبويب آخر",
        subtitleNewTab: "العودة إلى التبويب الجديد المفتوح للمتابعة",
      },
      loading: {
        title: "جاري تسجيل الدخول...",
        subtitle: "سيتم توجيهك قريبًا",
      },
      failed: {
        title: "رابط التحقق هذا غير صالح",
        subtitle: "العودة إلى التبويب الأصلي للمتابعة.",
      },
      expired: {
        title: "انتهت صلاحية رابط التحقق هذا",
        subtitle: "العودة إلى التبويب الأصلي للمتابعة.",
      },
    },
    phoneCode: { ...commonTexts.signIn.phoneCode },
    phoneCodeMfa: { ...commonTexts.signIn.phoneCode, subtitle: "" },
    totpMfa: {
      title: "التحقق من خطوتين",
      subtitle: "",
      formTitle: "رمز التحقق",
      formSubtitle: "أدخل رمز التحقق المولد بواسطة تطبيق المصادقة الخاص بك",
    },
    backupCodeMfa: {
      title: "أدخل رمز النسخ الاحتياطي",
      subtitle: "للمتابعة إلى {{applicationName}}",
      formTitle: "",
      formSubtitle: "",
    },
    alternativeMethods: {
      title: "استخدم طريقة أخرى",
      actionLink: "احصل على مساعدة",
      blockButton__emailLink: "إرسال رابط بريد إلكتروني إلى {{identifier}}",
      blockButton__emailCode: "إرسال رمز بريد إلكتروني إلى {{identifier}}",
      blockButton__phoneCode: "إرسال رمز SMS إلى {{identifier}}",
      blockButton__password: "تسجيل الدخول باستخدام كلمة المرور",
      blockButton__totp: "استخدام تطبيق المصادقة الخاص بك",
      blockButton__backupCode: "استخدام رمز النسخ الاحتياطي",
      getHelp: {
        title: "احصل على مساعدة",
        content: `إذا كنت تواجه صعوبة في تسجيل الدخول إلى حسابك، يمكنك مراسلتنا عبر البريد الإلكتروني وسنعمل معك لاستعادة الوصول في أقرب وقت ممكن.`,
        blockButton__emailSupport: "الدعم عبر البريد الإلكتروني",
      },
    },
    noAvailableMethods: {
      title: "لا يمكن تسجيل الدخول",
      subtitle: "حدث خطأ",
      message:
        "لا يمكن المضي قدمًا في عملية تسجيل الدخول. لا يوجد عامل توثيق متاح.",
    },
  },
  userProfile: {
    mobileButton__menu: "القائمة",
    formButtonPrimary__continue: "استمرار",
    formButtonPrimary__finish: "انتهاء",
    formButtonReset: "إلغاء",
    start: {
      headerTitle__account: "الحساب",
      headerTitle__security: "الأمان",
      headerSubtitle__account: "إدارة معلومات حسابك",
      headerSubtitle__security: "إدارة تفضيلات الأمان الخاصة بك",
      profileSection: {
        title: "الملف الشخصي",
      },
      usernameSection: {
        title: "اسم المستخدم",
        primaryButton__changeUsername: "تغيير اسم المستخدم",
        primaryButton__setUsername: "تعيين اسم المستخدم",
      },
      emailAddressesSection: {
        title: "عناوين البريد الإلكتروني",
        primaryButton: "إضافة عنوان بريد إلكتروني",
        detailsTitle__primary: "عنوان البريد الإلكتروني الرئيسي",
        detailsSubtitle__primary: "هذا هو البريد الإلكتروني الرئيسي",
        detailsAction__primary: "اكمل عملية التحقق",
        detailsTitle__nonPrimary: "تعيين كعنوان بريد إلكتروني رئيسي",
        detailsSubtitle__nonPrimary:
          "قم بتعيين هذا البريد الإلكتروني كعنوان رئيسي لتلقي التواصل بشأن حسابك.",
        detailsAction__nonPrimary: "تعيين كرئيسي",
        detailsTitle__unverified: "عنوان بريد إلكتروني غير متحقق",
        detailsSubtitle__unverified:
          "هذا البريد الإلكتروني لم يتم التحقق منه وقد يكون محدودًا في الوظائف",
        detailsAction__unverified: "اكمل عملية التحقق",
        destructiveActionTitle: "إزالة",
        destructiveActionSubtitle: "حذف هذا البريد الإلكتروني وإزالته من حسابك",
        destructiveAction: "إزالة عنوان البريد الإلكتروني",
      },
      phoneNumbersSection: {
        title: "أرقام الهاتف",
        primaryButton: "إضافة رقم هاتف",
        detailsTitle__primary: "رقم الهاتف الرئيسي",
        detailsSubtitle__primary: "هذا هو الرقم الهاتفي الرئيسي",
        detailsAction__primary: "اكمل عملية التحقق",
        detailsTitle__nonPrimary: "تعيين كرقم هاتف رئيسي",
        detailsSubtitle__nonPrimary:
          "قم بتعيين هذا الرقم الهاتفي كرقم رئيسي لتلقي التواصل بشأن حسابك.",
        detailsAction__nonPrimary: "تعيين كرئيسي",
        detailsTitle__unverified: "رقم هاتف غير متحقق",
        detailsSubtitle__unverified:
          "هذا الرقم الهاتفي لم يتم التحقق منه وقد يكون محدودًا في الوظائف",
        detailsAction__unverified: "اكمل عملية التحقق",
        destructiveActionTitle: "إزالة",
        destructiveActionSubtitle: "حذف هذا الرقم الهاتفي وإزالته من حسابك",
        destructiveAction: "إزالة رقم الهاتف",
      },
      connectedAccountsSection: {
        title: "حسابات متصلة",
        primaryButton: "ربط حساب",
        title__conectionFailed: "إعادة محاولة الاتصال الفاشلة",
        title__connectionFailed: "إعادة محاولة الاتصال الفاشلة",
        title__reauthorize: "المطلوب إعادة التفويض",
        subtitle__reauthorize:
          "تم تحديث النطاقات المطلوبة، وقد تواجه مشكلات في الوظائف المحددة. يرجى إعادة تفويض هذا التطبيق لتجنب أي مشاكل",
        actionLabel__conectionFailed: "حاول مرة أخرى",
        actionLabel__connectionFailed: "حاول مرة أخرى",
        actionLabel__reauthorize: "التفويض الآن",
        destructiveActionTitle: "إزالة",
        destructiveActionSubtitle: "إزالة هذا الحساب المتصل من حسابك",
        destructiveActionAccordionSubtitle: "إزالة الحساب المتصل",
      },
      enterpriseAccountsSection: {
        title: "حسابات الشركة",
      },
      passwordSection: {
        title: "كلمة المرور",
        primaryButton__changePassword: "تغيير كلمة المرور",
        primaryButton__setPassword: "تعيين كلمة المرور",
      },
      mfaSection: {
        title: "التحقق من خطوتين",
        primaryButton: "إضافة التحقق من خطوتين",
        phoneCode: {
          destructiveActionTitle: "إزالة",
          destructiveActionSubtitle:
            "إزالة هذا الرقم الهاتفي من وسائل التحقق من خطوتين",
          destructiveActionLabel: "إزالة رقم الهاتف",
          title__default: "العامل الافتراضي",
          title__setDefault: "تعيين كعامل افتراضي",
          subtitle__default:
            "سيتم استخدام هذا العامل كطريقة تحقق من خطوتين افتراضية عند تسجيل الدخول.",
          subtitle__setDefault:
            "قم بتعيين هذا العامل كعامل افتراضي لاستخدامه كطريقة تحقق من خطوتين افتراضية عند تسجيل الدخول.",
          actionLabel__setDefault: "تعيين كافتراضي",
        },
        backupCodes: {
          headerTitle: "رموز النسخ الاحتياطي",
          title__regenerate: "إعادة إنشاء رموز النسخ الاحتياطي",
          subtitle__regenerate:
            "احصل على مجموعة جديدة من رموز النسخ الاحتياطي الآمنة. سيتم حذف رموز النسخ الاحتياطي السابقة ولا يمكن استخدامها.",
          actionLabel__regenerate: "إعادة إنشاء الرموز",
        },
        totp: {
          headerTitle: "تطبيق المصادقة",
          title: "العامل الافتراضي",
          subtitle:
            "سيتم استخدام هذا العامل كطريقة تحقق من خطوتين افتراضية عند تسجيل الدخول.",
          destructiveActionTitle: "إزالة",
          destructiveActionSubtitle:
            "إزالة تطبيق المصادقة من وسائل التحقق من خطوتين",
          destructiveActionLabel: "إزالة تطبيق المصادقة",
        },
      },
      activeDevicesSection: {
        title: "الأجهزة النشطة",
        primaryButton: "الأجهزة النشطة",
        detailsTitle: "الجهاز الحالي",
        detailsSubtitle: "هذا هو الجهاز الذي تستخدمه حالياً",
        destructiveActionTitle: "تسجيل الخروج",
        destructiveActionSubtitle: "تسجيل الخروج من حسابك على هذا الجهاز",
        destructiveAction: "تسجيل الخروج من الجهاز",
      },
      web3WalletsSection: {
        title: "محافظ Web3",
        primaryButton: "محافظ Web3",
        destructiveActionTitle: "إزالة",
        destructiveActionSubtitle: "إزالة هذه المحفظة Web3 من حسابك",
        destructiveAction: "إزالة المحفظة",
      },
      dangerSection: {
        title: "خطر",
        deleteAccountButton: "حذف الحساب",
        deleteAccountTitle: "حذف الحساب",
        deleteAccountDescription: "احذف حسابك وجميع البيانات المرتبطة به",
      },
    },
    profilePage: {
      title: "تحديث الملف الشخصي",
      imageFormTitle: "صورة الملف الشخصي",
      imageFormSubtitle: "تحميل صورة",
      imageFormDestructiveActionSubtitle: "إزالة الصورة",
      fileDropAreaTitle: "اسحب الملف هنا، أو...",
      fileDropAreaAction: "اختر ملفًا",
      fileDropAreaHint:
        "قم بتحميل صورة بامتداد JPG، PNG، GIF، أو WEBP وحجم أقل من 10 ميجابايت",
      readonly:
        "تم توفير معلومات ملف التعريف الخاصة بك من خلال اتصال الشركة ولا يمكن تحريرها.",
      successMessage: "تم تحديث ملفك الشخصي بنجاح.",
    },
    usernamePage: {
      title: "تحديث اسم المستخدم",
      successMessage: "تم تحديث اسم المستخدم بنجاح.",
    },
    emailAddressPage: {
      title: "إضافة عنوان البريد الإلكتروني",
      emailCode: {
        formHint:
          "سيتم إرسال بريد إلكتروني يحتوي على رمز التحقق إلى هذا العنوان البريدي.",
        formTitle: "رمز التحقق",
        formSubtitle: "أدخل رمز التحقق الذي تم إرساله إلى {{identifier}}",
        resendButton: "لم تستلم الرمز؟ إعادة الإرسال",
        successMessage:
          "تمت إضافة البريد الإلكتروني {{identifier}} إلى حسابك بنجاح.",
      },
      emailLink: {
        formHint:
          "سيتم إرسال بريد إلكتروني يحتوي على رابط التحقق إلى هذا العنوان البريدي.",
        formTitle: "رابط التحقق",
        formSubtitle: "انقر على الرابط المرسل إلى {{identifier}} للتحقق",
        resendButton: "لم تستلم الرابط؟ إعادة الإرسال",
        successMessage:
          "تمت إضافة البريد الإلكتروني {{identifier}} إلى حسابك بنجاح.",
      },
      removeResource: {
        title: "إزالة عنوان البريد الإلكتروني",
        messageLine1: "{{identifier}} سيتم إزالته من هذا الحساب.",
        messageLine2:
          "لن تتمكن بعد الآن من تسجيل الدخول باستخدام هذا العنوان البريدي.",
        successMessage: "تمت إزالة {{emailAddress}} من حسابك بنجاح.",
      },
    },
    phoneNumberPage: {
      title: "إضافة رقم الهاتف",
      successMessage: "{{identifier}} تمت إضافته إلى حسابك بنجاح.",
      infoText:
        "سيتم إرسال رسالة نصية تحتوي على رابط التحقق إلى هذا الرقم الهاتفي.",
      infoText__secondary: "يمكن أن تنطبق أسعار الرسائل والبيانات.",
      removeResource: {
        title: "إزالة رقم الهاتف",
        messageLine1: "{{identifier}} سيتم إزالته من هذا الحساب.",
        messageLine2:
          "لن تتمكن بعد الآن من تسجيل الدخول باستخدام هذا الرقم الهاتفي.",
        successMessage: "تمت إزالة {{phoneNumber}} من حسابك بنجاح.",
      },
    },
    connectedAccountPage: {
      title: "إضافة حساب متصل",
      formHint: "حدد مزودًا لربط حسابك.",
      formHint__noAccounts: "لا توجد مزودي حساب خارجي متاحين.",
      socialButtonsBlockButton: "ربط حساب {{provider|titleize}}",
      successMessage: "تمت إضافة المزود إلى حسابك بنجاح",
      removeResource: {
        title: "إزالة حساب متصل",
        messageLine1: "{{identifier}} سيتم إزالته من هذا الحساب.",
        messageLine2:
          "لن تتمكن بعد الآن من استخدام هذا الحساب المتصل وقد لا تعمل أي ميزات تعتمد عليه.",
        successMessage: "تمت إزالة {{connectedAccount}} من حسابك بنجاح.",
      },
    },
    web3WalletPage: {
      title: "إضافة محفظة Web3",
      subtitle__availableWallets: "حدد محفظة Web3 للاتصال بها بحسابك.",
      subtitle__unavailableWallets: "لا تتوفر محافظ Web3 حاليًا.",
      successMessage: "تمت إضافة المحفظة إلى حسابك.",
      removeResource: {
        title: "إزالة محفظة Web3",
        messageLine1: "سيتم إزالة {{identifier}} من هذا الحساب.",
        messageLine2:
          "لن تتمكن بعد الآن من تسجيل الدخول باستخدام هذه المحفظة الرقمية.",
        successMessage: "تمت إزالة {{web3Wallet}} من حسابك.",
      },
    },

    passwordPage: {
      title: "تعيين كلمة المرور",
      changePasswordTitle: "تغيير كلمة المرور",
      readonly:
        "حاليًا لا يمكن تحرير كلمة المرور الخاصة بك لأنك يمكنك تسجيل الدخول فقط عبر الاتصال بالشركة.",
      successMessage: "تم تعيين كلمة المرور الخاصة بك.",
      changePasswordSuccessMessage: "تم تحديث كلمة المرور الخاصة بك.",
      sessionsSignedOutSuccessMessage:
        "تم تسجيل الخروج من جميع الأجهزة الأخرى.",
    },
    mfaPage: {
      title: "إضافة التحقق من خطوتين",
      formHint: "حدد طريقة لإضافتها.",
    },
    mfaTOTPPage: {
      title: "إضافة تطبيق المصادقة",
      verifyTitle: "رمز التحقق",
      verifySubtitle:
        "أدخل رمز التحقق الذي تم إنشاؤه بواسطة تطبيق المصادقة الخاص بك",
      successMessage:
        "تم تمكين التحقق المتداخل الثنائي الخاص بك الآن. عند تسجيل الدخول، ستحتاج إلى إدخال رمز التحقق من هذا التطبيق كخطوة إضافية.",
      authenticatorApp: {
        infoText__ableToScan:
          "قم بإعداد طريقة تسجيل الدخول الجديدة في تطبيق المصادقة الخاص بك ومسح الرمز الاستجابي QR التالي لربطه بحسابك.",
        infoText__unableToScan:
          "قم بإعداد طريقة تسجيل الدخول الجديدة في تطبيق المصادقة الخاص بك وأدخل المفتاح الذي تم توفيره أدناه.",
        inputLabel__unableToScan1:
          "تأكد من تمكين كلمات المرور الزمنية أو الرموز الاستجابية مرة واحدة، ثم انهاء ربط حسابك.",
        inputLabel__unableToScan2:
          "بالإضافة إلى ذلك، إذا كان تطبيق المصادقة الخاص بك يدعم URIs TOTP، يمكنك أيضًا نسخ الURI الكامل.",
        buttonAbleToScan__nonPrimary: "مسح الرمز الاستجابي QR بدلاً من ذلك",
        buttonUnableToScan__nonPrimary: "لا يمكن مسح الرمز الاستجابي QR؟",
      },
      removeResource: {
        title: "إزالة التحقق المتداخل الثنائي الخاص بك",
        messageLine1:
          "لن يكون هناك حاجة إلى رموز التحقق من هذا التطبيق بعد الآن عند تسجيل الدخول.",
        messageLine2:
          "قد لا يكون حسابك آمنًا بنفس الطريقة. هل أنت متأكد من أنك تريد المتابعة؟",
        successMessage:
          "تمت إزالة التحقق المتداخل الثنائي الخاص بك عبر تطبيق المصادقة.",
      },
    },
    mfaPhoneCodePage: {
      title: "إضافة التحقق برمز الرسائل النصية",
      primaryButton__addPhoneNumber: "إضافة رقم هاتف",
      subtitle__availablePhoneNumbers:
        "حدد رقم هاتف للتسجيل في التحقق برمز الرسائل النصية ثنائي الخطوة.",
      subtitle__unavailablePhoneNumbers:
        "لا تتوفر أي أرقام هواتف للتسجيل في التحقق برمز الرسائل النصية ثنائي الخطوة.",
      successMessage:
        "تم تمكين التحقق برمز الرسائل النصية ثنائي الخطوة لهذا الرقم الهاتفي الآن. عند تسجيل الدخول، ستحتاج إلى إدخال رمز التحقق الذي تم إرساله إلى هذا الرقم الهاتفي كخطوة إضافية.",
      removeResource: {
        title: "إزالة التحقق بخطوتين",
        messageLine1:
          "{{identifier}} لن يتلقى رموز التحقق عند تسجيل الدخول بعد الآن.",
        messageLine2:
          "قد لا يكون حسابك آمنًا بنفس الطريقة. هل أنت متأكد من أنك تريد المتابعة؟",
        successMessage:
          "تمت إزالة التحقق برمز الرسائل النصية ثنائي الخطوة لـ {{mfaPhoneCode}}",
      },
    },
    backupCodePage: {
      title: "إضافة التحقق باستخدام رموز الاحتياط",
      title__codelist: "رموز الاحتياط",
      subtitle__codelist: "قم بتخزينها بأمان واحتفظ بها سرًا.",
      infoText1: "ستتم تمكين رموز الاحتياط لهذا الحساب.",
      infoText2:
        "حافظ على سرية رموز الاحتياط وقم بتخزينها بأمان. يمكنك إعادة إنشاء رموز الاحتياط إذا كنت تشك في تعرضها للخرق.",
      successSubtitle:
        "يمكنك استخدام واحدة من هذه الرموز لتسجيل الدخول إلى حسابك إذا فقدت الوصول إلى جهاز المصادقة الخاص بك.",
      successMessage:
        "تم تمكين رموز الاحتياط الآن. يمكنك استخدام واحدة من هذه الرموز لتسجيل الدخول إلى حسابك إذا فقدت الوصول إلى جهاز المصادقة الخاص بك. يمكن استخدام كل رمز مرة واحدة فقط.",
      actionLabel__copy: "نسخ الكل",
      actionLabel__copied: "تم النسخ!",
      actionLabel__download: "تحميل .txt",
      actionLabel__print: "طباعة",
    },
    deletePage: {
      title: "حذف الحساب",
      messageLine1: "هل أنت متأكد أنك تريد حذف حسابك؟",
      messageLine2: "هذا الإجراء لا رجعة فيه ودائم.",
      actionDescription: "اكتب 'حذف الحساب' أدناه للمتابعة.",
      confirm: "حذف الحساب",
    },
  },
  userButton: {
    action__manageAccount: "إدارة الحساب",
    action__signOut: "تسجيل الخروج",
    action__signOutAll: "تسجيل الخروج من جميع الحسابات",
    action__addAccount: "إضافة حساب",
  },
  organizationSwitcher: {
    personalWorkspace: "الحساب الشخصي",
    notSelected: "لم يتم تحديد أي منظمة",
    action__createOrganization: "إنشاء منظمة",
    action__manageOrganization: "إدارة المنظمة",
    action__invitationAccept: "الانضمام",
    action__suggestionsAccept: "طلب الانضمام",
    suggestionsAcceptedLabel: "بانتظار الموافقة",
  },
  impersonationFab: {
    title: "تم تسجيل الدخول كـ {{identifier}}",
    action__signOut: "تسجيل الخروج",
  },
  organizationProfile: {
    badge__unverified: "غير موثّق",
    badge__automaticInvitation: "دعوات تلقائية",
    badge__automaticSuggestion: "اقتراحات تلقائية",
    badge__manualInvitation: "بدون تسجيل تلقائي",
    start: {
      headerTitle__members: "الأعضاء",
      headerTitle__settings: "الإعدادات",
      headerSubtitle__members: "عرض وإدارة أعضاء المنظمة",
      headerSubtitle__settings: "إدارة إعدادات المنظمة",
    },
    profilePage: {
      title: "ملف المنظمة",
      subtitle: "إدارة ملف المنظمة",
      successMessage: "تم تحديث المنظمة بنجاح.",
      dangerSection: {
        title: "مخاطر",
        leaveOrganization: {
          title: "مغادرة المنظمة",
          messageLine1:
            "هل أنت متأكد من رغبتك في مغادرة هذه المنظمة؟ ستفقد الوصول إلى هذه المنظمة وتطبيقاتها.",
          messageLine2: "هذا الإجراء لا يمكن التراجع عنه وهو دائم.",
          successMessage: "لقد غادرت المنظمة.",
          actionDescription: "اكتب {{organizationName}} أدناه للمتابعة.",
        },
        deleteOrganization: {
          title: "حذف المنظمة",
          messageLine1: "هل أنت متأكد من رغبتك في حذف هذه المنظمة؟",
          messageLine2: "هذا الإجراء لا يمكن التراجع عنه وهو دائم.",
          actionDescription: "اكتب {{organizationName}} أدناه للمتابعة.",
          successMessage: "لقد تم حذف المنظمة.",
        },
      },
      domainSection: {
        title: "النطاقات الموثَّقة",
        subtitle:
          "السماح للمستخدمين بالانضمام تلقائيًا إلى المنظمة أو طلب الانضمام بناءً على نطاق البريد الإلكتروني الموثَّق.",
        primaryButton: "إضافة نطاق",
        unverifiedDomain_menuAction__verify: "التحقق من النطاق",
        unverifiedDomain_menuAction__remove: "حذف النطاق",
      },
    },
    createDomainPage: {
      title: "إضافة نطاق",
      subtitle:
        "أضف النطاق للتحقق. يمكن للمستخدمين الذين لديهم عناوين بريد إلكتروني في هذا النطاق الانضمام تلقائيًا إلى المنظمة أو طلب الانضمام.",
    },
    verifyDomainPage: {
      title: "التحقق من النطاق",
      subtitle: "يجب التحقق من النطاق {{domainName}} عبر البريد الإلكتروني.",
      subtitleVerificationCodeScreen:
        "تم إرسال رمز التحقق إلى {{emailAddress}}. أدخل الرمز للمتابعة.",
      formTitle: "رمز التحقق",
      formSubtitle: "أدخل رمز التحقق المرسل إلى عنوان بريدك الإلكتروني",
      resendButton: "لم تستلم الرمز؟ إعادة الإرسال",
    },

    verifiedDomainPage: {
      subtitle: "النطاق {{domain}} مُتحقق الآن. استمر باختيار وضع الالتحاق.",
      start: {
        headerTitle__enrollment: "خيارات الالتحاق",
        headerTitle__danger: "خطر",
      },
      enrollmentTab: {
        subtitle: "اختر كيف يمكن لمستخدمي هذا النطاق الانضمام إلى المنظمة.",
        manualInvitationOption__label: "لا يوجد انضمام تلقائي",
        manualInvitationOption__description:
          "يمكن دعوة المستخدمين يدويًا فقط إلى المنظمة.",
        automaticInvitationOption__label: "دعوات تلقائية",
        automaticInvitationOption__description:
          "تُرسل دعوات تلقائيًا للمستخدمين للانضمام إلى المنظمة عند التسجيل، ويمكنهم الانضمام في أي وقت.",
        automaticSuggestionOption__label: "اقتراحات تلقائية",
        automaticSuggestionOption__description:
          "يتلقى المستخدمون اقتراحًا لطلب الانضمام، ولكن يجب أن يتم الموافقة عليهم من قبل المسؤول قبل أن يتمكنوا من الانضمام إلى المنظمة.",
        formButton__save: "حفظ",
        calloutInfoLabel: "سيؤثر تغيير وضع الالتحاق فقط على المستخدمين الجدد.",
        calloutInvitationCountLabel:
          "الدعوات المعلقة المُرسلة إلى المستخدمين: {{count}}",
        calloutSuggestionCountLabel:
          "الاقتراحات المعلقة المُرسلة إلى المستخدمين: {{count}}",
      },
      dangerTab: {
        removeDomainTitle: "إزالة النطاق",
        removeDomainSubtitle: "قم بإزالة هذا النطاق من النطاقات المُتحققة لديك",
        removeDomainActionLabel__remove: "إزالة النطاق",
        calloutInfoLabel: "سيؤثر إزالة هذا النطاق على المستخدمين المدعوين.",
      },
    },
    invitePage: {
      title: "دعوة الأعضاء",
      subtitle: "قم بدعوة أعضاء جدد إلى هذه المنظمة",
      successMessage: "تم إرسال الدعوات بنجاح",
      detailsTitle__inviteFailed:
        "تعذر إرسال الدعوات. قم بإصلاح ما يلي وحاول مرة أخرى:",
      formButtonPrimary__continue: "إرسال الدعوات",
    },
    removeDomainPage: {
      title: "إزالة النطاق",
      messageLine1: "سيتم إزالة نطاق البريد الإلكتروني {{domain}}.",
      messageLine2:
        "لن يتمكن المستخدمون من الانضمام تلقائيًا إلى المنظمة بعد ذلك.",
      successMessage: "{{domain}} تمت إزالته.",
    },
    membersPage: {
      detailsTitle__emptyRow: "لا يوجد أعضاء لعرضهم",
      action__invite: "دعوة",
      start: {
        headerTitle__active: "نشط",
        headerTitle__members: "الأعضاء",
        headerTitle__invited: "مدعوين",
        headerTitle__invitations: "دعوات",
        headerTitle__requests: "الطلبات",
      },
      activeMembersTab: {
        tableHeader__user: "المستخدم",
        tableHeader__joined: "انضم",
        tableHeader__role: "الدور",
        tableHeader__actions: "",
        menuAction__remove: "إزالة العضو",
      },
      invitedMembersTab: {
        tableHeader__invited: "تمت الدعوة",
        menuAction__revoke: "سحب الدعوة",
      },
      invitationsTab: {
        table__emptyRow: "لا توجد دعوات لعرضها",
        manualInvitations: {
          headerTitle: "دعوات فردية",
          headerSubtitle: "دعوة الأعضاء يدويًا وإدارة الدعوات الحالية.",
        },
        autoInvitations: {
          headerTitle: "دعوات تلقائية",
          headerSubtitle:
            "قم بدعوة المستخدمين من خلال ربط نطاق البريد الإلكتروني بمنظمتك. أي شخص يسجل باستخدام نطاق بريد إلكتروني مطابق سيتمكن من الانضمام إلى المنظمة في أي وقت.",
          primaryButton: "إدارة النطاقات الموثوقة",
        },
      },
      requestsTab: {
        tableHeader__requested: "الوصول المطلوب",
        menuAction__approve: "الموافقة",
        menuAction__reject: "رفض",
        table__emptyRow: "لا توجد طلبات لعرضها",
        requests: {
          headerTitle: "الطلبات",
          headerSubtitle:
            "تصفح وإدارة المستخدمين الذين طلبوا الانضمام إلى المنظمة.",
        },
        autoSuggestions: {
          headerTitle: "اقتراحات تلقائية",
          headerSubtitle:
            "المستخدمون الذين يسجلون باستخدام نطاق بريد إلكتروني مطابق سيتمكنون من رؤية اقتراح لطلب الانضمام إلى منظمتك.",
          primaryButton: "إدارة النطاقات الموثوقة",
        },
      },
    },
  },
  createOrganization: {
    title: "Create Organization",
    formButtonSubmit: "Create organization",
    subtitle: "Set the organization profile",
    invitePage: {
      formButtonReset: "Skip",
    },
  },
  organizationList: {
    createOrganization: "Create Organization",
    title: "Select an account",
    titleWithoutPersonal: "Select an organization",
    subtitle: "to continue to {{applicationName}}",
    action__invitationAccept: "Join",
    invitationAcceptedLabel: "Joined",
    action__suggestionsAccept: "Request to join",
    suggestionsAcceptedLabel: "Pending approval",
    action__createOrganization: "Create organization",
  },
  unstable__errors: {
    identification_deletion_failed: "لا يمكنك حذف هويتك الأخيرة.",
    phone_number_exists:
      "هذا الرقم مستخدم بالفعل. الرجاء المحاولة مرة أخرى باستخدام رقم آخر.",
    form_identifier_not_found: "",
    captcha_invalid:
      "فشل تسجيل الدخول بسبب عمليات التحقق الأمنية التي فشلت. يرجى تحديث الصفحة للمحاولة مرة أخرى أو التواصل مع الدعم للمزيد من المساعدة.",
    form_password_pwned:
      "تم العثور على هذا الرمز السري كجزء من اختراق ولا يمكن استخدامه، يرجى استخدام رمز سري آخر بدلاً منه.",
    form_username_invalid_length: "",
    form_username_invalid_character: "",
    form_param_format_invalid: "",
    form_param_format_invalid__email_address:
      "يجب أن يكون عنوان البريد الإلكتروني عنوان بريد إلكتروني صالح.",
    form_password_length_too_short: "",
    form_param_nil: "",
    form_code_incorrect: "",
    form_password_incorrect: "",
    not_allowed_access: "",
    form_identifier_exists: "",
    form_password_validation_failed: "كلمة المرور غير صحيحة",
    form_password_not_strong_enough:
      "كلمة المرور الخاصة بك غير قوية بما فيه الكفاية.",
    form_password_size_in_bytes_exceeded:
      "تجاوزت كلمة المرور الخاصة بك الحد الأقصى المسموح به من البايتات، يرجى تقصيرها أو إزالة بعض الرموز الخاصة.",
    passwordComplexity: {
      sentencePrefix: "يجب أن تحتوي كلمة المرور على",
      minimumLength: "{{length}} أحرف أو أكثر",
      maximumLength: "أقل من {{length}} حروف",
      requireNumbers: "رقم",
      requireLowercase: "حرف صغير",
      requireUppercase: "حرف كبير",
      requireSpecialCharacter: "حرف خاص",
    },
    zxcvbn: {
      notEnough: "كلمة المرور الخاصة بك غير قوية بما فيه الكفاية.",
      couldBeStronger:
        "كلمة المرور الخاصة بك تعمل، ولكن يمكن أن تكون أقوى. جرب إضافة المزيد من الأحرف.",
      goodPassword: "كلمة المرور الخاصة بك تلبي جميع المتطلبات اللازمة.",
      warnings: {
        straightRow:
          "الصفوف المستقيمة من المفاتيح على لوحة المفاتيح سهلة التخمين.",
        keyPattern: "أنماط لوحة المفاتيح القصيرة سهلة التخمين.",
        simpleRepeat: 'الأحرف المكررة مثل "aaa" سهلة التخمين.',
        extendedRepeat: 'أنماط الأحرف المكررة مثل "abcabcabc" سهلة التخمين.',
        sequences: 'تسلسلات الأحرف الشائعة مثل "abc" سهلة التخمين.',
        recentYears: "السنوات الحديثة سهلة التخمين.",
        dates: "التواريخ سهلة التخمين.",
        topTen: "هذه كلمة مرور مستخدمة بشكل كبير.",
        topHundred: "هذه كلمة مرور تستخدم بشكل متكرر.",
        common: "هذه كلمة مرور شائعة الاستخدام.",
        similarToCommon: "هذه مشابهة لكلمة مرور شائعة الاستخدام.",
        wordByItself: "الكلمات الفردية سهلة التخمين.",
        namesByThemselves: "الأسماء أو الألقاب الفردية سهلة التخمين.",
        commonNames: "الأسماء الشائعة والألقاب سهلة التخمين.",
        userInputs: "يجب ألا تحتوي على أي بيانات شخصية أو متعلقة بالصفحة.",
        pwned: "تم كشف كلمة المرور الخاصة بك في اختراق للبيانات على الإنترنت.",
      },
      suggestions: {
        l33t: "تجنب استبدال الحروف التوقعية مثل '@' بـ 'a'.",
        reverseWords: "تجنب عكس تهجئة الكلمات الشائعة.",
        allUppercase: "استخدم حروف كبيرة في بعض الأحرف، وليس في الجميع.",
        capitalization:
          "اكتب بعض الحروف بالحروف الكبيرة بخلاف الحرف الأول فقط.",
        dates: "تجنب الأحداث والسنوات التي ترتبط بك.",
        recentYears: "تجنب السنوات الحديثة.",
        associatedYears: "تجنب السنوات التي ترتبط بك.",
        sequences: "تجنب التسلسلات الشائعة من الأحرف.",
        repeated: "تجنب تكرار الكلمات والأحرف.",
        longerKeyboardPattern:
          "استخدم أنماط لوحة المفاتيح الطويلة وغير اتجاه الكتابة مرارًا.",
        anotherWord: "أضف المزيد من الكلمات غير الشائعة.",
        useWords: "استخدم عدة كلمات، ولكن تجنب العبارات الشائعة.",
        noNeed:
          "يمكنك إنشاء كلمات مرور قوية دون استخدام الرموز أو الأرقام أو الأحرف الكبيرة.",
        pwned:
          "إذا كنت تستخدم هذه كلمة المرور في أماكن أخرى، يجب أن تقوم بتغييرها.",
      },
    },
    form_param_max_length_exceeded__name: "الاسم لا يجب أن يتجاوز 256 حرفًا.",
    form_param_max_length_exceeded__first_name:
      "الاسم الأول لا يجب أن يتجاوز 256 حرفًا.",
    form_param_max_length_exceeded__last_name:
      "الاسم الأخير لا يجب أن يتجاوز 256 حرفًا.",
  },
  dates: {
    previous6Days:
      "آخر {{ date | weekday('ar','long') }} في {{ date | timeString('ar') }}",
    lastDay: "أمس في {{ date | timeString('ar') }}",
    sameDay: "اليوم في {{ date | timeString('ar') }}",
    nextDay: "غدًا في {{ date | timeString('ar') }}",
    next6Days:
      "{{ date | weekday('ar','long') }} في {{ date | timeString('ar') }}",
    numeric: "{{ date | numeric('ar') }}",
  },
} as const;

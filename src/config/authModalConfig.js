// Shared fields
const sharedFields = {
  email: {
    type: "email",
    name: "email",
    placeholder: "Email",
    required: true,
    validation: [
      {
        rule: "required",
        message: "Email is required",
      },
      {
        rule: "pattern",
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Please enter a valid email address",
      },
    ],
  },
  password: {
    type: "password",
    name: "password",
    placeholder: "Password",
    required: true,
    validation: [
      {
        rule: "required",
        message: "Password is required",
      },
      {
        rule: "minLength",
        value: 8,
        message: "Password must be at least 8 characters long",
      },
      {
        rule: "pattern",
        value: /^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).+$/,
        message:
          "Password must contain at least one capital letter and one special character",
      },
    ],
  },
};

export const authModalConfig = {
  signin: {
    fields: [
      { ...sharedFields.email },
      {...sharedFields.password},
    ],
  },
  signup: {
    fields: [
      {
        type: "text",
        name: "name",
        placeholder: "Name",
        required: true,
        validation: [
          {
            rule: "required",
            message: "Name is required",
          },
          {
            rule: "minLength",
            value: 2,
            message: "Name must be at least 2 characters long",
          },
          {
            rule: "maxLength",
            value: 30,
            message: "Name cannot exceed 30 characters",
          },
          {
            rule: "pattern",
            value: /^(?!.*\..*\.)[A-Za-z\s.]+$/,
            message:
              "Name can only contain letters, spaces, and at most one dot",
          },
        ],
      },
      { ...sharedFields.email },
      {...sharedFields.password},
      {
        type: "password",
        name: "confirmPassword",
        placeholder: "Confirm Password",
        required: true,
        validation: [
          {
            rule: "required",
            message: "Confirm Password is required",
          },
          {
            matchField: "password",
            message: "Passwords do not match",
          },
        ],
      },
    ],
  },
};

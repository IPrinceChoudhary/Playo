// Shared fields
const sharedFields = {
  email: {
    type: "email",
    name: "email",
    placeholder: "Email",
    required: true,
    validation: {
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Please enter a valid email address",
    },
  },
};

export const authModalConfig = {
  signin: {
    fields: [
      { ...sharedFields.email },
      {
        type: "password",
        name: "password",
        placeholder: "Password",
        required: true,
        validation: {
          minLength: 8,
          message: "Password must be at least 8 characters long",
        },
      },
    ],
  },
  signup: {
    fields: [
      {
        type: "text",
        name: "name",
        placeholder: "Name",
        required: true,
        validation: {
          rules: [
            {
              condition: (value) => value.trim().length === 0,
              message: "This field is required",
            },
            {
              condition: (value) => value.length < 3,
              message: "Name must be at least 3 characters long",
            },
            {
              condition: (value) => value.length > 20,
              message: "Name must be less than 20 characters",
            },
          ],
        },
      },
      { ...sharedFields.email },
      {
        type: "password",
        name: "password",
        placeholder: "Password",
        required: true,
        validation: {
          minLength: 8,
          pattern:
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          message:
            "Password must be 8+ characters with a letter, number, and special character",
        },
      },
      {
        type: "password",
        name: "confirmPassword",
        placeholder: "Confirm Password",
        required: true,
        validation: {
          matchField: "password",
          message: "Passwords do not match",
        },
      },
    ],
  },
  buttonStyles: {
    submit: "bg-blue-500 text-white hover:bg-blue-600",
    google: "bg-red-500 text-white hover:bg-red-600",
    guest: "bg-gray-500 text-white hover:bg-gray-600",
  },
  // authOptions: {
  //   google: {
  //     text: (mode) =>
  //       mode === "signin" ? "Sign In with Google" : "Sign Up with Google",
  //     className: "bg-red-500 text-white hover:bg-red-600",
  //   },
  //   guest: {
  //     text: "Continue as Guest",
  //     className: "bg-gray-500 text-white hover:bg-gray-600",
  //   },
  // },
};

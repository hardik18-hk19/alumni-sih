export const regestratinFormControls = [
  {
    id: "name",
    type: "text",
    palceholder: "Enter your name",
    label: "Name",
    componentType: "input",
  },
  {
    id: "email",
    type: "email",
    palceholder: "Enter your email",
    label: "Email",
    componentType: "input",
  },
  {
    id: "password",
    type: "password",
    palceholder: "Enter your password",
    label: "Password",
    componentType: "input",
  },
  {
    id: "role",
    type: "",
    palceholder: "",
    label: "Role",
    componentType: "select",
    options: [
      {
        id: "user",
        label: "User",
      },
      {
        id: "admin",
        label: "Admin",
      },
    ],
  },
  {
    id: "location",
    type: "text",
    palceholder: "Enter your location",
    label: "Location",
    componentType: "input",
  },
  {
    id: "batch",
    type: "",
    palceholder: "",
    label: "Batch",
    componentType: "select",
    options: [
      {
        id: "2023",
        label: "2023",
      },
      {
        id: "2022",
        label: "2022",
      },
      {
        id: "2021",
        label: "2021",
      },
      {
        id: "2020",
        label: "2020",
      },
      {
        id: "2019",
        label: "2019",
      },
      {
        id: "2018",
        label: "2018",
      },
      {
        id: "2017",
        label: "2017",
      },
      {
        id: "2016",
        label: "2016",
      },
    ],
  },

  {
    id: "profession",
    type: "",
    palceholder: "",
    label: "Profession",
    componentType: "select",
    options: [
      {
        id: "engineer",
        label: "Engineer",
      },
      {
        id: "self",
        label: "Seld Employed",
      },
      {
        id: "buisness",
        label: "Buisness",
      },
      {
        id: "startup",
        label: "Start Up",
      },
      {
        id: "others",
        label: "Others",
      },
    ],
  },
];
export const loginFormControls = [
  {
    id: "email",
    type: "email",
    palceholder: "Enter your email",
    label: "Email",
    componentType: "input",
  },
  {
    id: "password",
    type: "password",
    palceholder: "Enter your password",
    label: "Password",
    componentType: "input",
  },
];

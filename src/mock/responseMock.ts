export const mockResponse = {
  users: [
    {
      id: 1,
      name: "Иван",
      surname: "Иванов",
      avatar: "https://faces-img.xcdn.link/image-lorem-face-2160.jpg",
      vacation: {
        spentDays: "9",
        all: "28",
      },
      awayFromWorkTime: [
        {
          type: "vacation",
          startAwayTime: new Date("2022-05-22T00:00:00"),
          endAwayTime: new Date("2022-05-31T00:00:00"),
        },
        {
          type: "sickLeave",
          startAwayTime: new Date("2022-04-17T00:00:00"),
          endAwayTime: new Date("2022-04-30T00:00:00"),
        },
      ],
    },
    {
      id: 2,
      name: "Катерина",
      surname: "Иванова",
      avatar: "https://faces-img.xcdn.link/image-lorem-face-5156.jpg",
      vacation: {
        spentDays: "13",
        all: "28",
      },
      awayFromWorkTime: [
        {
          type: "vacation",
          startAwayTime: new Date("2022-08-07T00:00:00"),
          endAwayTime: new Date("2022-08-20T00:00:00"),
        },
      ],
    },
    {
      id: 3,
      name: "Василий",
      surname: "Пупкин",
      avatar: "https://faces-img.xcdn.link/image-lorem-face-4336.jpg",
      vacation: {
        spentDays: "23",
        all: "28",
      },
      awayFromWorkTime: [
        {
          type: "vacation",
          startAwayTime: new Date("2022-03-27T00:00:00"),
          endAwayTime: new Date("2022-04-02T00:00:00"),
        },
        {
          type: "vacation",
          startAwayTime: new Date("2022-05-22T00:00:00"),
          endAwayTime: new Date("2022-06-04T00:00:00"),
        },
        {
          type: "vacation",
          startAwayTime: new Date("2022-06-26T00:00:00"),
          endAwayTime: new Date("2022-06-30T00:00:00"),
        },
        {
          type: "sickLeave",
          startAwayTime: new Date("2022-09-11T00:00:00"),
          endAwayTime: new Date("2022-09-17T00:00:00"),
        },
        {
          type: "sickLeave",
          startAwayTime: new Date("2022-09-25T00:00:00"),
          endAwayTime: new Date("2022-09-30T00:00:00"),
        },
      ],
    },
    {
      id: 4,
      name: "Дуня",
      surname: "Кулакова",
      avatar: "https://faces-img.xcdn.link/image-lorem-face-1876.jpg",
      vacation: {
        spentDays: "15",
        all: "28",
      },
      awayFromWorkTime: [
        {
          type: "vacation",
          startAwayTime: new Date("2022-08-07T00:00:00"),
          endAwayTime: new Date("2022-08-22T00:00:00"),
        },
        {
          type: "timeOff",
          startAwayTime: new Date("2022-05-15T00:00:00"),
          endAwayTime: new Date("2022-05-21T00:00:00"),
        },
      ],
    },
    {
      id: 5,
      name: "Кузьма",
      surname: "Пряник",
      avatar: "https://faces-img.xcdn.link/image-lorem-face-4593.jpg",
      vacation: {
        spentDays: "9",
        all: "28",
      },
      awayFromWorkTime: [
        {
          type: "sickLeave",
          startAwayTime: new Date("2022-04-24T00:00:00"),
          endAwayTime: new Date("2022-04-30T00:00:00"),
        },
        {
          type: "vacation",
          startAwayTime: new Date("2022-05-22T00:00:00"),
          endAwayTime: new Date("2022-05-31T00:00:00"),
        },
      ],
    },
  ],
};

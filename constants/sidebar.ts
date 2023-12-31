const screens = {
    main_layout: "MainLaoyout",
    home: "Home",
    resources: "Resources",
    events: "Events",
    settings: "Settings",
    chats: "Chats",
    community: "Community",
    profile: "Profile",
    contact: "Contact",
    rate: "Rate Us",
    support: "Support"

}

const sidebar__tabs = [
    {
        id: 0,
        label: screens.home,
    },
    {
        id: 2,
        label: screens.chats
    },
    {
        id: 1,
        label: screens.community
    },
    {
        id: 3,
        label: screens.profile
    },
    {
      id: 4,
      label: screens.rate
    },
    {
      id: 5,
      label: screens.contact
    },
    {
      id: 6,
      label: screens.support
    }
]

const constants = { sidebar__tabs, screens };

export default constants;
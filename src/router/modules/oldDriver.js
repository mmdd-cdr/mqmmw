/** When your routing table is too long, you can split it into small modules**/

const oldDriverRouter = {
  path: "/olddriver",
  component: () => import("@/views/olddriver/index"),
  // redirect: "noredirect",
  name: "olddriver",
  meta: {
    // title: "老司机带带我🚗🚗",
    icon: "🚗",
    need: true
  },
  children: [
    {
      path: "/olddriver/re",
      component: () => import("@/views/olddriver/index"),
      name: "re"
      // meta: { title: "dashboard" }
    }
  ]
};

export default oldDriverRouter;

export default {
  data() {
    return {
      groups: ["librarians", "students", "requests"]
    };
  },
  methods: {
    mapUserAttributes(user) {
      const temp = {};
      if (user["UserAttributes"]) {
        user["UserAttributes"].forEach(attr => {
          temp[attr["Name"]] = attr["Value"];
        });
      } else {
        user["Attributes"].forEach(attr => {
          temp[attr["Name"]] = attr["Value"];
        });
      }
      temp["Enabled"] = user["Enabled"];
      temp["UserCreateDate"] = user["UserCreateDate"];
      temp["UserLastModifiedDate"] = user["UserLastModifiedDate"];
      temp["UserStatus"] = user["UserStatus"];
      return temp;
    },
    academicYear(user) {
      let year = Math.ceil(
        (new Date() - new Date(user["custom:yoa"], 7)) /
        (1000 * 60 * 60 * 24 * 365)
      );
      if (user["islateral"]) {
        year++;
      }
      if (year === 1) {
        return "1<sup>st</sup> Year";
      } else if (year === 2) {
        return "2<sup>nd</sup> Year";
      } else if (year === 3) {
        return "3<sup>rd</sup> Year";
      } else if (year === 4) {
        return "4<sup>th</sup> Year";
      } else {
        return "passed out";
      }
    },
    mapGroups(groups) {
      const temp = {
        librarians: false,
        students: false,
        requests: false
      };
      groups.forEach(group => {
        temp[group.GroupName] = true;
      });
      return temp;
    }
  }
};

const UserDetails = {
  userName: String,
  firstName: String,
  middleName: String,
  lastName: String,
  email: String,
  phone: Number,
  professionalSummary: String,
  profile: String,
  DOB: String,
  addresses: {
    permanentAddress: {
      doorNo: String,
      streetName: String,
      landMark: String,
      areaName: String,
      pincode: String,
      cityName: String,
      districtName: String,
      stateName: String,
    },
  },
  Skills: [String],
  languages: [String],
  hobbies: [String],
  extraCirrcularActivities: [String],
  educationDetails: [
    {
      type: String, // 10th
      board: String,
      school: String,
      hallticket: String,
      startDate: String,
      endDate: String,
      yearofPass: String,
      gradingSystem: String, // cgpa / %
      grade: String,
      city: String,
      description: String,
      stream: String, // Mech / cse
    },
  ],
  experiences: [
    {
      company: String, // Company Name
      role: String,
      startDate: String,
      endDate: String,
      city: String,
      description: String,
    },
  ],
  links: [
    {
      title: String, // like github
      link: String,
    },
  ],
  projects: [
    {
      company: String, // Company Name
      project: String,
      startDate: String,
      endDate: String,
      city: String,
      description: String,
    },
  ],
  internships: [
    {
      company: String, // Company Name
      project: String,
      startDate: String,
      endDate: String,
      city: String,
      description: String,
    },
  ],
  volunteerings: [
    {
      organization: String, // Company Name
      volunteering: String,
      startDate: String,
      endDate: String,
      city: String,
      description: String,
    },
  ],
  accomplishments: [
    {
      company: String, // Company Name
      accomplishment: String,
      startDate: String,
      endDate: String,
      city: String,
      description: String,
    },
  ],
  research: [
    {
      organization: String,
      type: String,
      startDate: String,
      endDate: String,
      description: String,
      title: String,
    },
  ],
  certifications: [
    {
      organization: String,
      title: String,
      type: String,
      startDate: String,
      endDate: String,
      description: String,
    },
  ],
};
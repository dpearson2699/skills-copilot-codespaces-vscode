function skillsMember() {
  return {
    skills: ['JavaScript', 'React', 'Node.js'],
    getSkills() {
      return this.skills;
    },
  };
}
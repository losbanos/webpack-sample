import axios from "axios";

export default {
  async render() {
    const result = await axios("/api/users");
    return (result.data || [])
      .map((item) => {
        return `<div id="list">ID: ${item.id}, NAME: ${item.name}</div>`;
      })
      .join("==-==");
  },
};

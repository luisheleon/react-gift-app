import App from "../App";
import { shallow } from "enzyme";

describe("Test <App />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test("should create a snapshop", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("should return title", () => {
    const title = "GifExpertApp";
    const htmlTitle = wrapper.find("#title").text().trim();
    const hr = wrapper.exists("hr");
    expect(htmlTitle).toBe(title);
    expect(hr).toBe(true);
  });
});

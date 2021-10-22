import App from "../App";
import { shallow } from "enzyme";
import GifGrid from "../components/GifGrid";

describe("Test <App />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App defaultCategory={["goku", "saitama"]} />);
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

  test("should return quantity of default component <GifGrid />", () => {
    const gifGridCount = wrapper.find(GifGrid).length;
    expect(gifGridCount).toBe(2);
  });
});

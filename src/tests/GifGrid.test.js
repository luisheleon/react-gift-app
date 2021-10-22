import GifGrid from "../components/GifGrid";
import { shallow } from "enzyme";

describe("Test <GifGrid />", () => {
  let wrapper;
  let category = "Ducks";

  beforeEach(() => {
    wrapper = shallow(<GifGrid category={category} />);
  });

  test("should verify snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

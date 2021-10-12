import CardImage from "../components/CardImage";
import { mount } from "enzyme";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { shallow } from "enzyme";

describe("test <CardImage />", () => {
  const props = {
    title: "Un titulo",
    id: "asdfasdf87238974",
    url: "http://www.google.com",
  };

  let wrapper, wrapperMount;
  beforeEach(() => {
    wrapperMount = mount(<CardImage {...props} />);
    wrapper = shallow(<CardImage {...props} />);
  });
  test("should render component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should create a cardMedia and Typography components whit props", () => {
    const img = wrapperMount.find(CardMedia);
    const typo = wrapperMount.find(Typography);
    const imgProps = img.props();
    const typoProps = typo.props();
    expect(img).toHaveLength(1);
    expect(imgProps.image).toBe(props.url);
    expect(imgProps.alt).toBe(props.id + props.title);
    expect(typo).toHaveLength(1);
    expect(typoProps.children).toBe(props.title);
  });
});

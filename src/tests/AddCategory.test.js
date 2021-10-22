import AddCategory from "../components/AddCategory";
import { shallow, mount } from "enzyme";
import TextField from "@mui/material/TextField";

describe("Test <AddCategory />", () => {
  const handleChange = jest.fn();
  let wrapper;
  const eventSubmit = {
    preventDefault() {},
  };
  const event = {
    target: {
      value: "hola",
    },
  };
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={handleChange} />);
  });
  test("should return snapshop", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should update component when input is changed", () => {
    wrapper.find(TextField).at(0).simulate("change", event);
    expect(wrapper.find("p").text().trim()).toBe(event.target.value);
  });

  test("should prevent submit if the input is empty", () => {
    const eventSubmit = {
      preventDefault() {},
    };
    wrapper.find("form").simulate("submit", eventSubmit);
    expect(handleChange).not.toHaveBeenCalled();
  });

  test("should submit if the input is not empty", () => {
    wrapper.find(TextField).at(0).simulate("change", event);
    wrapper.find("form").simulate("submit", eventSubmit);
    expect(handleChange).toHaveBeenCalled();
  });

  test("should return input categories to empty", () => {
    wrapper.find(TextField).simulate("change", event);
    expect(wrapper.find(TextField).props().value).toBe(event.target.value);
    wrapper.find("form").simulate("submit", eventSubmit);
    const eventEmpty = { ...event };
    eventEmpty.target.value = "";
    wrapper.find(TextField).simulate("change", eventEmpty);
    expect(handleChange).toHaveBeenCalled();
    expect(wrapper.find(TextField).props().value).toBe("");
  });
});

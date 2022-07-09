
import { LandingPage } from "./Pages/LandingPage";

describe("Feedback form ests", () => {
  let feedback = new LandingPage();

  beforeEach(() => {
    feedback.navigate();
  });
    
  it("fill feedback form with valid details", () => {
    feedback.name("Ome");
    feedback.email("djdjdj");
    feedback.subject("learning");
    feedback.comment("this is easy");
    feedback.submit();
  });

  it("fill feedback form with invalid details", () => {
    feedback.name("Ome");
    feedback.email("djdjdj");
    feedback.subject("learning");
    feedback.comment("this is easy");
    feedback.submit();
  });

  it("clearing form", () => {
    feedback.name("Ome");
    feedback.email("djdjdj");
    feedback.subject("learning");
    feedback.comment("this is easy");
    feedback.clear();
  });
});

//What is the functionality of the search bar
//Search for an existing item
//Search for an item that does not exist
//The person did not enter any search term but just clicked search(blank search)
//If its supposed to just take in strings, you can decide to type in numbers and symbols


//What is the opposite
//If you're expecting this, what if you get the opposite

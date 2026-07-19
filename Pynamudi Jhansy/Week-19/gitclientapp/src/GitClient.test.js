import axios from "axios";
import GitClient from "./GitClient";

jest.mock("axios");


describe("Git Client Tests", () => {

  test("should return repository names for techiesyed", async () => {

    const mockRepositories = [
      {
        id: 1,
        name: "ReactProject"
      },
      {
        id: 2,
        name: "AngularProject"
      }
    ];


    axios.get.mockResolvedValue({
      data: mockRepositories
    });


    const client = new GitClient();

    const result =
      await client.getRepositories("techiesyed");


    expect(result)
      .toEqual(mockRepositories);


    expect(axios.get)
      .toHaveBeenCalledWith(
        "https://api.github.com/users/techiesyed/repos"
      );

  });

});
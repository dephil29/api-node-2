import {expect} from "chai";
import createApiSpec from "~/apiSpecs";
import {Playlist, schema} from "./playlist.model";

describe("Playlist model", () => {
  it("should have a title", () => {
    expect(schema.title).to.exist;
    expect(schema.title.required).to.be.an("array");
  });
  it("should have songs", () => {
    expect(schema.songs).to.exist;
    expect(schema.songs.unique).to.equal(true);
    expect(schema.songs.required).to.be.an("array");
  });
  it("should have favorite", () => {
    expect(schema.favorite).to.exist;
    expect(schema.favorite.type).to.eql(Boolean);
  });
});

createApiSpec(Playlist, "playlist", { title: "best songs ever", songs: ["Boris", "Dragonaut"], favorite: true });

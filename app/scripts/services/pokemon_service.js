"use strict";

angular.module("nashvillePokemonIndexApp.Services")
  .factory("$pokemonService", function(){
    return {
      getPokemons: function() {
        var raichu = new Pokemon({
          name: 'Raichu',
          picture: 'http://th07.deviantart.net/fs71/PRE/f/2013/004/6/1/my_fifth_vector_of_raichu__by_flutterflyraptor-d5puiwq.png',
          description: "Electric Type"
        });
        var jigglypuff = new Pokemon({
          name: 'Jigglypuff',
          picture: 'http://th01.deviantart.net/fs70/PRE/i/2012/094/2/2/jigglypuff_by_leafyheart-d4v1whk.png',
          description: "Normal/Fairy Type"
        });
        var onix = new Pokemon({
          name: 'Onix',
          picture: 'http://oyster.ignimgs.com/mediawiki/apis.ign.com/pokedex/thumb/5/50/095_onix.png/228px-095_onix.png',
          description: "Rock Type"
        });

        return [
          raichu,
          jigglypuff,
          onix
        ];
      }
    };
  });

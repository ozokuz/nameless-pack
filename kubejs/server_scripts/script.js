"use strict";(function(){onEvent("recipes",function(e){e.remove({output:"antiqueatlas:empty_antique_atlas",input:"minecraft:book"}),e.remove({type:"minecraft:smelting",input:"#forge:raw_materials"});var t=["iron","gold"],r=["sword","pickaxe","shovel","axe","hoe"];e.remove({output:"minecraft:shears"}),r.forEach(function(r){t.forEach(function(t){e.remove({output:"minecraft:".concat(t,"_").concat(r)})})})});onEvent("recipes",function(e){e.remove({output:"minecraft:flint",type:"minecraft:crafting_shapeless"}),e.shapeless("minecraft:flint",["minecraft:gravel","minecraft:gravel","minecraft:gravel"])});onEvent("recipes",function(e){e.remove({output:"minecraft:bread",input:"minecraft:wheat"}),e.remove({output:"create:dough"}),e.remove({output:"minecraft:bread",input:"create:dough"}),e.remove({output:"farmersdelight:wheat_dough"}),e.shapeless("3x farmersdelight:wheat_dough",[Item.of("ceramics:fluid_clay_bucket",'{fluid:"minecraft:water"}'),"create:wheat_flour","create:wheat_flour","create:wheat_flour"]).replaceIngredient(1,"ceramics:empty_clay_bucket"),e.shapeless("3x farmersdelight:wheat_dough",["minecraft:water_bucket","create:wheat_flour","create:wheat_flour","create:wheat_flour"]).replaceIngredient(1,"minecraft:bucket"),e.campfireCooking("minecraft:bread","farmersdelight:wheat_dough")});onEvent("recipes",function(e){e.forEachRecipe({output:"#forge:chests/wooden",type:"minecraft:crafting_shaped"},function(t){var r=t.originalRecipeIngredients[0],a=t.originalRecipeResult;e.remove({output:a}),e.shaped(a,["PPP","PIP","PPP"],{P:r,I:"minecraft:iron_nugget"})}),e.remove({output:"#supplementaries:sack"}),e.shaped("supplementaries:sack",["SPS","S S","SSS"],{S:"farmersdelight:straw",P:"#forge:string"}),e.remove({output:"minecraft:compass"}),e.shaped("minecraft:compass",[" I ","IRI"," I "],{I:"#forge:ingots/iron",R:"#forge:dyes/red"})});settings.logAddedRecipes=!1;settings.logRemovedRecipes=!1;settings.logSkippedRecipes=!1;settings.logErroringRecipes=!0})();
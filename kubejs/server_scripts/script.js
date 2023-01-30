"use strict";(function(){var e=function e(e,t,r){r.custom({type:"sewingkit:sewing",materials:t.map(function(e){return"item"in e?{count:e.count,ingredient:{item:e.item}}:{count:e.count,ingredient:{tag:e.tag.slice(1)}}}),result:{item:e},tool:{type:"sewingkit:tool_ingredient",tool_type:"sewingkit_sew"}})};settings.logAddedRecipes=!1;settings.logRemovedRecipes=!1;settings.logSkippedRecipes=!1;settings.logErroringRecipes=!0;onEvent("recipes",function(e){e.remove({output:"antiqueatlas:empty_antique_atlas",input:"minecraft:book"}),e.remove({type:"minecraft:smelting",input:"#forge:raw_materials"}),e.remove({input:"immersiveengineering:hammer",output:"#forge:dusts"}),e.remove({output:"tconstruct:seared_heater"}),e.remove({output:"minecraft:shears"}),["sword","pickaxe","shovel","axe","hoe"].forEach(function(t){["wooden","stone","iron","golden","diamond","netherite"].forEach(function(r){e.remove({output:"minecraft:".concat(r,"_").concat(t)})})}),["helmet","chestplate","leggings","boots"].forEach(function(t){["leather","iron","chainmail","golden","diamond","netherite"].forEach(function(r){e.remove({output:"minecraft:".concat(r,"_").concat(t)})})}),["wood","stone","bone","gold"].forEach(function(t){e.remove({output:"sewingkit:".concat(t,"_sewing_needle"),type:"minecraft:crafting_shapeless"})}),e.remove({output:"engineersdecor:labeled_crate"}),e.remove({output:"immersiveengineering:crate"}),e.remove({output:"immersiveengineering:reinforced_crate"}),e.remove({output:"car:iron_stick"}),e.remove({output:"#forge:rods/all_metal",type:"minecraft:crafting_shaped"})});onEvent("recipes",function(e){e.remove({output:"minecraft:bread",input:"minecraft:wheat"}),e.remove({output:"create:dough"}),e.remove({output:"minecraft:bread",input:"create:dough"}),e.remove({output:"farmersdelight:wheat_dough"}),e.recipes.minecraft.crafting_shapeless("3x farmersdelight:wheat_dough",[Item.of("ceramics:fluid_clay_bucket",'{fluid:"minecraft:water"}'),"create:wheat_flour","create:wheat_flour","create:wheat_flour"]).replaceIngredient(Item.of("ceramics:fluid_clay_bucket",'{fluid:"minecraft:water"}'),"ceramics:empty_clay_bucket"),e.recipes.minecraft.crafting_shapeless("3x farmersdelight:wheat_dough",["minecraft:water_bucket","create:wheat_flour","create:wheat_flour","create:wheat_flour"]).replaceIngredient("minecraft:water_bucket","minecraft:bucket"),e.recipes.minecraft.campfire_cooking("minecraft:bread","farmersdelight:wheat_dough"),e.custom({type:"create:splashing",ingredients:[{tag:"forge:flour/wheat"}],results:[{item:"farmersdelight:wheat_dough"}]})});onEvent("recipes",function(e){e.remove({output:"supplementaries:sack"}),e.recipes.minecraft.crafting_shaped("supplementaries:sack",["SPS","S S","SSS"],{S:"farmersdelight:straw",P:"#forge:string"}),e.remove({output:"minecraft:bundle"}),e.recipes.minecraft.crafting_shaped("minecraft:bundle",[" S ","L L"," L "],{L:"minecraft:leather",S:"#forge:string"}),e.recipes.minecraft.crafting_shapeless("immersiveengineering:dust_wood",["minecraft:stick","tinkersurvival:mortar_and_pestle"]).keepIngredient("tinkersurvival:mortar_and_pestle"),e.remove({output:"minecraft:paper"}),e.recipes.minecraft.crafting_shaped("minecraft:paper",["SSS"],{S:"minecraft:sugar_cane"}),e.recipes.minecraft.crafting_shaped("3x minecraft:paper",[" W ","SSS","SSS"],{W:"minecraft:water_bucket",S:"#forge:dusts/wood"}).replaceIngredient("minecraft:water_bucket","minecraft:bucket"),e.recipes.minecraft.crafting_shaped("3x minecraft:paper",[" W ","SSS","SSS"],{W:Item.of("ceramics:fluid_clay_bucket",'{fluid:"minecraft:water"}'),S:"#forge:dusts/wood"}).replaceIngredient(Item.of("ceramics:fluid_clay_bucket",'{fluid:"minecraft:water"}'),"ceramics:empty_clay_bucket"),e.remove({output:"minecraft:book",type:"minecraft:crafting_shapeless"}),e.recipes.minecraft.crafting_shaped("minecraft:book",["SCP","CPP"],{P:"minecraft:paper",S:"#forge:string",C:"minecraft:leather"}),e.recipes.minecraft.crafting_shaped("minecraft:book",["SCP","CPP"],{P:"minecraft:paper",S:"#forge:string",C:"tconstruct:pattern"})});var t={sewingkit:{sewing:e}};onEvent("recipes",function(e){e.remove({output:"immersiveengineering:plate_iron"}),e.recipes.minecraft.crafting_shapeless("immersiveengineering:plate_iron",[Item.of("immersiveengineering:hammer").ignoreNBT(),"minecraft:iron_ingot","minecraft:iron_ingot"]).damageIngredient("immersiveengineering:hammer"),e.remove({output:"minecraft:bucket",type:"minecraft:crafting_shaped"}),e.recipes.minecraft.crafting_shaped("minecraft:bucket",["PHP"," P "],{P:"#forge:plates/iron",H:Item.of("immersiveengineering:hammer").ignoreNBT()}).damageIngredient("immersiveengineering:hammer"),e.remove({output:"minecraft:hopper"}),e.recipes.minecraft.crafting_shaped("minecraft:hopper",["P P","PHP"," P "],{P:"#forge:plates/iron",H:Item.of("immersiveengineering:hammer").ignoreNBT()}).damageIngredient("immersiveengineering:hammer"),e.remove({output:"minecraft:stonecutter"}),e.recipes.minecraft.crafting_shaped("minecraft:stonecutter",[" H "," P ","SSS"],{P:"#forge:plates/iron",H:Item.of("immersiveengineering:hammer").ignoreNBT(),S:"minecraft:smooth_stone"}).damageIngredient("immersiveengineering:hammer"),e.remove({output:"minecraft:compass"}),e.recipes.minecraft.crafting_shaped("minecraft:compass",[" I ","IRI"," I "],{I:"#forge:ingots/iron",R:"#forge:dyes/red"}),e.forEachRecipe({output:"#forge:chests/wooden",type:"minecraft:crafting_shaped"},function(t){var r=t.originalRecipeIngredients[0],i=t.originalRecipeResult;e.remove({output:i}),e.recipes.minecraft.crafting_shaped(i,["PPP","PIP","PPP"],{P:r,I:"minecraft:iron_nugget"})}),e.remove({output:"minecraft:barrel"}),e.recipes.minecraft.crafting_shaped("minecraft:barrel",["PSP","PIP","PSP"],{P:"#minecraft:planks",S:"#minecraft:wooden_slabs",I:"minecraft:iron_nugget"}),e.remove({output:"minecraft:lantern",type:"minecraft:crafting_shaped"}),e.recipes.minecraft.smoking("minecraft:torch","minecraft:stick"),e.remove({output:"quark:backpack"}),t.sewingkit.sewing("quark:backpack",[{count:8,item:"sewingkit:leather_sheet"},{count:3,item:"sewingkit:leather_strip"},{count:2,tag:"#forge:string"},{count:1,tag:"#forge:plates/iron"}],e),e.remove({output:"sophisticatedbackpacks:backpack"}),t.sewingkit.sewing("sophisticatedbackpacks:backpack",[{count:12,item:"sewingkit:leather_sheet"},{count:6,item:"sewingkit:leather_strip"},{count:4,tag:"#forge:string"},{count:1,tag:"#forge:plates/iron"}],e),e.remove({output:"immersiveengineering:cokebrick"}),e.recipes.minecraft.crafting_shaped("3x immersiveengineering:cokebrick",["CBC","BSB","CBC"],{C:"minecraft:clay_ball",B:"immersive_weathering:deepslate_brick",S:"#forge:sandstone"}),e.remove({output:"immersiveengineering:blastbrick"}),e.recipes.tconstruct.casting_basin("immersiveengineering:blastbrick","tconstruct:seared_stone",1e3).cast("minecraft:bricks").consumeCast().coolingTime(40),e.remove({output:"immersiveengineering:alloybrick"}),e.recipes.minecraft.crafting_shaped("2x immersiveengineering:alloybrick",["SB","BS"],{S:"#forge:sandstone",B:"minecraft:nether_brick"}),e.remove({output:"tconstruct:smeltery_controller"}),e.custom({type:"tconstruct:retextured_casting_basin",cast:{tag:"tconstruct:smeltery_bricks"},cast_consumed:!0,fluid:{tag:"forge:molten_rose_gold",amount:360},result:"tconstruct:smeltery_controller",cooling_time:100}),["oak","birch","spruce","jungle","acacia","dark_oak"].forEach(function(t){e.remove({output:"minecraft:".concat(t,"_boat")}),e.remove({output:"boatload:large_".concat(t,"_boat")}),e.recipes.minecraft.crafting_shaped("minecraft:".concat(t,"_boat"),["MPM","TTT"],{M:"minecraft:".concat(t,"_planks"),P:"immersiveengineering:emergency_paddles",T:"#forge:treated_wood"}),e.recipes.minecraft.crafting_shaped("boatload:large_".concat(t,"_boat"),["MBM","TTT"],{M:"minecraft:".concat(t,"_planks"),B:"minecraft:".concat(t,"_boat"),T:"#forge:treated_wood"})})});onEvent("recipes",function(e){e.remove({output:"create:andesite_alloy"}),e.recipes.tconstruct.casting_basin("create:andesite_alloy","#forge:molten_iron",30).cast("minecraft:andesite").consumeCast().coolingTime(40),e.recipes.tconstruct.casting_basin("create:andesite_alloy","#forge:molten_zinc",10).cast("minecraft:andesite").consumeCast().coolingTime(40),e.recipes.tconstruct.casting_basin("create:andesite_alloy","#forge:molten_iron",30).cast("tconstruct:seared_stone").consumeCast().coolingTime(40),e.recipes.tconstruct.casting_basin("create:andesite_alloy","#forge:molten_zinc",10).cast("tconstruct:seared_stone").consumeCast().coolingTime(40),e.remove({output:"quark:crate"}),e.recipes.minecraft.crafting_shaped("quark:crate",["PSP","RPR","PSP"],{P:"#forge:treated_wood",S:"#forge:plates/iron",R:"#forge:rods/iron"})});onEvent("recipes",function(e){e.remove({type:"minecraft:crafting_shapeless",input:"#forge:ingots",output:"#forge:storage_blocks"}),e.remove({type:"minecraft:crafting_shapeless",input:"#forge:ingots",output:"#forge:nuggets"}),e.remove({type:"minecraft:crafting_shapeless",input:"#forge:storage_blocks",output:"#forge:ingots"}),e.remove({type:"minecraft:crafting_shapeless",input:"#forge:nuggets",output:"#forge:ingots"})});onEvent("recipes",function(e){e.remove({mod:"theoneprobe"}),e.remove({mod:"sophisticatedstorage"}),e.remove({mod:"functionalstorage"}),e.remove({mod:"prettypipes"}),e.remove({mod:"torchmaster"}),e.remove({mod:"chunkloaders"}),e.remove({output:"waystones:warp_stone"}),["iron","gold","diamond","netherite"].forEach(function(t){e.remove({output:"sophisticatedbackpacks:".concat(t,"_backpack")})})});onEvent("recipes",function(e){e.remove({output:"create:andesite_casing"}),e.remove({output:"create:copper_casing"}),e.remove({output:"create:brass_casing"}),e.recipes.create.item_application("create:andesite_casing",["#forge:treated_wood","create:andesite_alloy"]),e.recipes.create.item_application("create:copper_casing",["#forge:treated_wood","#forge:plates/copper"]),e.recipes.create.item_application("create:brass_casing",["#forge:treated_wood","#forge:plates/brass"]),e.remove({output:"create:cogwheel"}),e.remove({output:"create:large_cogwheel"}),e.recipes.minecraft.crafting_shapeless("create:cogwheel",["create:shaft","#forge:treated_wood"]),e.recipes.minecraft.crafting_shapeless("create:large_cogwheel",["create:cogwheel","#forge:treated_wood"]),e.recipes.minecraft.crafting_shapeless("create:large_cogwheel",["create:shaft","#forge:treated_wood","#forge:treated_wood"]),e.custom({type:"create:deploying",ingredients:[{item:"create:shaft"},{tag:"forge:treated_wood"}],results:[{item:"create:cogwheel"}]}),e.custom({type:"create:deploying",ingredients:[{item:"create:cogwheel"},{tag:"forge:treated_wood"}],results:[{item:"create:large_cogwheel"}]}),e.remove({output:"create:mechanical_saw"}),e.recipes.minecraft.crafting_shapeless("create:mechanical_saw",["create:andesite_casing","immersiveengineering:sawblade"])})})();
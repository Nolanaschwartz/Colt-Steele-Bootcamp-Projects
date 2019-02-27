var mongoose =require("mongoose"),
    Campground=require("./models/campground"),
    Comment =require("./models/comment");
    
var data=[
    {
        name:"San Juan Campgrounds",
        image:"https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg",
        description:"For the classic Pacific Northwest experience, consider camping on San Juan Island. Experience the famous west side where you will have views of Haro Strait, Vancouver Island, the Olympic Peninsula, and maybe even some orca whales. Launch kayaks and boats and explore the coastline, or take the short drive to one of the parks or shoreline trails.  For those who want inland shelter, there are options closer to Friday Harbor which feature fresh water lakes."
    },
    {
        name:"Dovakhin Mountain",
        image:"https://geoheritagescience.files.wordpress.com/2013/01/skyrim-mountains.jpg",
        description:"Two hundred years have passed since the events of The Elder Scrolls IV: Oblivion, and it is now 4E 201. The High King of Skyrim has been killed, and the threat of Civil War looms over the land of Skyrim; One side wishes to secede from the weakened Third Empire, while the other wishes to remain a part of it. To make matters worse, this schism is the final event in a prophecy foretold by the Elder Scrolls that will lead to the return of the dragons under Alduin, the Nordic god of destruction."
    },
    {
        name:"Mount Doom",
        image:"https://vignette4.wikia.nocookie.net/lotr/images/8/8c/Mount_doom.png/revision/latest?cb=20060310232853",
        description:'During the Second Age, Sauron chose the land of Mordor as his dwelling-place. He used the fire that welled there from the heart of the earth in his sorceries and his forging. Around SA 1600, Sauron forged the One Ring in the depths of Sammath Naur, which was built within Mount Doom itself. On SA 3429, Mount Doom erupted, signalling Sauron\'s attack on Gondor, where it earned its name "Amon Amarth."'
    },
    {
        name:"Banff",
        image:"http://banffnationalpark.com/wp-content/uploads/2017/03/banff-casino.jpg",
        description:"Banff is a resort town in the province of Alberta, located within Banff National Park. The peaks of Mt. Rundle and Mt. Cascade, part of the Rocky Mountains, dominate its skyline. On Banff Avenue, the main thoroughfare, boutiques and restaurants mix with château-style hotels and souvenir shops. The surrounding 6,500 square kilometres of parkland are home to wildlife including elk and grizzly bears."
    }
];

function seedDB(){
    //remove all campgrounds
    Campground.remove({}, function(err){
        // if(err){
        //     console.log(err);
        // }else{
        //     console.log("Campgrounds deleted!");
        // } 
        
        // //add a few campgrounds
        // data.forEach(function(seed){
        //   Campground.create(seed, function(err, campground){
        //      if(err){
        //          console.log(err);
        //      } else{
        //          console.log("Added a campground");
        //          //Create a comment
        //          Comment.create(
        //             {
        //                  text:"This place is awesome but there is no wifi",
        //                  author:"Alduin"
        //             }, function(err, comment){
        //                 if(err){
        //                     console.log(err);
        //                 }else{
        //                     campground.comments.push(comment);
        //                     campground.save();
        //                     console.log("Created a comment");
        //                 }
        //             });
        //      }
        //   });  
        // });
    });    

    //add a few comments
}   

module.exports = seedDB;

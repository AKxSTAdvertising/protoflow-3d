export type Product={slug:string;name:string;category:string;collection:string;finish:string;description:string;price:number;perInch:number;sizes:number[];shape:string;model?:string;featured?:boolean;newArrival?:boolean;bestSeller?:boolean};
export type Collection={slug:string;number:string;name:string;short:string;description:string;shape:string};

export const collections:Collection[]=[
{slug:"divine-forms",number:"01",name:"Divine Forms",short:"Sacred sculptures with quiet presence.",description:"Devotional forms created to bring stillness, character and a sense of ritual into considered spaces.",shape:"form-divine"},
{slug:"buddha",number:"02",name:"Buddha",short:"Stillness, balance and contemplative form.",description:"Meditative sculptures inspired by calm, proportion and timeless presence.",shape:"form-buddha"},
{slug:"modern-art",number:"03",name:"Modern Art",short:"Sculptural pieces for contemporary spaces.",description:"Abstract and architectural forms for interiors that speak in a quieter visual language.",shape:"form-modern"},
{slug:"home-decor",number:"04",name:"Home Décor",short:"Objects designed to become focal points.",description:"Decorative objects with sculptural character, designed for shelves, consoles and living spaces.",shape:"form-decor"}];

const sizes=[3,4,5,6,7,8,9,10,11,12];
const p=(slug:string,name:string,category:string,collection:string,finish:string,description:string,shape:string,featured?:boolean,newArrival?:boolean,bestSeller?:boolean):Product=>({slug,name,category,collection,finish,description,price:1499,perInch:100,sizes,shape,featured,newArrival,bestSeller});

export const products:Product[]=[
p("the-meditative-one","The Meditative One","Buddha","buddha","Warm Stone","A calm seated form with balanced proportions, designed for quiet corners, consoles and personal spaces.","figure-a",true,false,true),
p("eternal-gaze","Eternal Gaze","Devotional","divine-forms","Antique Sand","A refined devotional portrait with softened edges and a timeless antique surface.","figure-b",true,true),
p("the-union","The Union","Couple Sculpture","divine-forms","Ivory Stone","Two sculptural forms meet as one continuous silhouette, expressing companionship and balance.","figure-c",true),
p("arc-of-silence","Arc of Silence","Modern Art","modern-art","Aged Bronze","An architectural gesture translated into a compact sculptural statement for contemporary interiors.","figure-d",true),
p("temple-form","Temple Form","Decorative","home-decor","Sandstone","A compact temple-inspired object with tactile stone character for shelves and consoles.","figure-e",true,true),
p("the-guardian","The Guardian","Devotional","divine-forms","Charcoal Stone","A grounded guardian silhouette with a deep ceremonial finish and quiet visual weight.","figure-f",true,false,true),
p("quiet-lotus","Quiet Lotus","Buddha","buddha","Natural Stone","A lotus-inspired meditation form with soft geometry and an understated gallery finish.","figure-a",false,true),
p("monolith-i","Monolith I","Modern Art","modern-art","Graphite Stone","A minimal vertical study with architectural proportions for modern rooms and workspaces.","figure-d"),
p("the-observer","The Observer","Home Décor","home-decor","Travertine","A small-scale sculptural object with a strong silhouette and natural stone character.","figure-e",false,false,true),
p("sacred-profile","Sacred Profile","Devotional","divine-forms","Ivory Stone","A graceful profile study designed to sit naturally within both traditional and contemporary interiors.","figure-b",false,true),
p("balance-study","Balance Study","Modern Art","modern-art","Aged Bronze","Interlocking volumes create a sense of movement while keeping a grounded gallery-like silhouette.","figure-c"),
p("ritual-vessel","Ritual Vessel","Home Décor","home-decor","Stone Grey","A sculptural vessel where useful object and decorative form become one.","figure-e"),
p("lotus-pedestal","Lotus Pedestal","Buddha","buddha","Pearl Stone","A layered lotus pedestal with a serene silhouette, made to frame a meditation space or altar.","figure-a",false,true),
p("sun-temple","Sun Temple","Decorative","home-decor","Champagne Stone","A compact geometric shrine-inspired form that catches light beautifully on a console or shelf.","figure-d",false,true),
p("inner-peace","Inner Peace","Buddha","buddha","Soft Ivory","A minimalist meditative bust focused on expression, proportion and a peaceful presence.","figure-b",true,false,true)
];

export const money=(v:number)=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(v);
export const priceForSize=(product:Product,size:number)=>product.price+Math.max(0,size-product.sizes[0])*product.perInch;
export const getCollection=(slug:string)=>collections.find(x=>x.slug===slug);
export const getProduct=(slug:string)=>products.find(x=>x.slug===slug);
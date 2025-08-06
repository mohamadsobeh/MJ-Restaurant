// src/data/blogs.ts

export interface BlogPost {
  id: number
  title: string
  image: string
  date: string
  excerpt: string
  link: string
  content: string //  مضاف حديثاً
}

export const blogs: BlogPost[] = [
  {
    id: 1,
    title: 'The Art of Syrian Grilling',
    image: '/images/Grilled-2.jpg',
    date: 'July 2025',
    excerpt:
      'Discover the secrets behind our perfectly grilled meats and the spices that define Syrian cuisine.',
    link: '/blog/grilling-art',
    content: `At MJ Restaurant, grilling is more than a cooking method—it’s an art passed down through generations. Our chefs use a blend of Syrian spices like sumac, Aleppo pepper, and za’atar to infuse every cut of meat with bold flavor. Come experience the smoky aroma and juicy tenderness that make our grills unforgettable.`,
  },
  {
    id: 2,
    title: 'Our Signature Dishes Explained',
    image: '/images/blogs-2.jpg',
    date: 'June 2025',
    excerpt:
      'Ever wondered how we prepare our famous dishes? Take a peek behind the kitchen doors.',
    link: '/blog/signature-dishes',
    content: `Our signature dishes are born from tradition and perfected with modern technique. From our creamy hummus to our layered kibbeh, each recipe is crafted with precision, passion, and authenticity. Let us take you step by step through what makes these dishes our guests’ favorites.`,
  },
  {
    id: 3,
    title: 'Healthy Choices at MJ Restaurant',
    image: '/images/blogs-3.jpg',
    date: 'May 2025',
    excerpt:
      'Enjoy flavor without guilt. Learn more about our healthy options and fresh ingredients.',
    link: '/blog/healthy-choices',
    content: `Eating healthy doesn’t mean compromising on taste. We offer a range of nutritious options, including grilled vegetables, lean meats, and fresh salads with house-made dressings. All our dishes are prepared with olive oil and seasonal produce for maximum flavor and health benefits.`,
  },
  {
    id: 4,
    title: 'Behind the Scenes with Our Chefs',
    image: '/images/blogs-4.png',
    date: 'April 2025',
    excerpt:
      'Meet the passionate team bringing your favorite dishes to life every day.',
    link: '/blog/our-chefs',
    content: `Our kitchen is led by a team of dedicated chefs who view every plate as a canvas. From early morning prep to late-night perfection, they pour their heart into every dish. Discover their stories, their techniques, and their favorite MJ creations.`,
  },
  {
    id: 5,
    title: 'Spices That Make Us Unique',
    image: '/images/blogs-5.png',
    date: 'March 2025',
    excerpt:
      'Explore the essential spices we use to craft bold, authentic Syrian flavors.',
    link: '/blog/syrian-spices',
    content: `What sets MJ’s food apart? Our unique blend of spices, sourced locally and internationally. From earthy cumin to fragrant cardamom, these spices build the foundation of our rich, layered flavors. Learn how we balance tradition and creativity in every recipe.`,
  },
  {
    id: 6,
    title: 'Seasonal Specials: What’s New This Month',
    image: '/images/blogs-6.png',
    date: 'February 2025',
    excerpt:
      'A look at the fresh and exciting dishes we’re introducing this season.',
    link: '/blog/seasonal-menu',
    content: `Each season brings new flavors, and we celebrate that with our rotating menu. This month, try our fig and walnut salad, pomegranate-glazed lamb, or rosewater dessert parfait. Seasonal ingredients bring freshness and surprise to your dining experience.`,
  },
]

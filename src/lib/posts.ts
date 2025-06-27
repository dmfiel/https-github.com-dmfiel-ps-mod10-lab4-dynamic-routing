export type Post = { id: string; slug: string; title: string; body: string };

export const posts = new Array<Post>(
  {
    id: '1',
    slug: 'first_post',
    title: 'First Blog Post',
    body: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.'
  },
  {
    id: '2',
    slug: 'trains_are_great',
    title: 'Trains Are Great!',
    body: 'I wish I could ride on trains all the time! When can we go again?'
  },
  {
    id: '3',
    slug: 'minecraft_is_fun',
    title: 'Minecraft Is Fun!',
    body: 'Everyone should play minecraft. You get to build houses and defend from zombies'
  },
  {
    id: '4',
    slug: 'sam_likes_doom',
    title: 'Sam Likes Doom',
    body: 'They want me to finish this program, so that they can destroy more demons.'
  }
);

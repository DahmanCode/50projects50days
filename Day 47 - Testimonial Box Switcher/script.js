const testimonialContainer = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Miyah Myles',
    position: 'Marketing',
    photo: 'https://randomuser.me/api/portraits/women/22.jpg',
    text: 'Fugit commodi sequi veniam labore magni dolorum nesciunt similique, quibusdam nobis necessitatibus explicabo. Asperiores quas atque accusantium dolore molestias mollitia aut,',
  },
  {
    name: 'June Cha',
    position: 'Software Engineer',
    photo: 'https://randomuser.me/api/portraits/men/62.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nostrum ut quos commodi amet eum velit perferendis, repudiandae error eos reiciendis minus possimus fugit molestias molestiae, sapiente et vero veritatis!',
  },
  {
    name: 'Iida Niskanen',
    position: 'Data Entry',
    photo: 'https://randomuser.me/api/portraits/women/32.jpg',
    text: 'Atque ea sed eaque totam incidunt nobis ullam iusto libero voluptas? Suscipit aspernatur totam voluptatibus vel. Aut quod eaque nesciunt?',
  },
  {
    name: 'Renee Sims',
    position: 'Receptionist',
    photo: 'https://randomuser.me/api/portraits/women/82.jpg',
    text: 'Tempora placeat, dignissimos iusto laborum. Aut beatae consectetur optio deleniti cum. Ut optio error perspiciatis repudiandae esse  nobis harum iusto nulla fugiat et neque!',
  },
  {
    name: 'Jonathan Nunfiez',
    position: 'Graphic Designer',
    photo: 'https://randomuser.me/api/portraits/men/52.jpg',
    text: 'Laboriosam animi facere consequuntur inventore. Dicta accusamus rem amet eaque eligendi optio minus sequi beatae saepe reprehenderit.',
  },
  {
    name: 'Sasha Ho',
    position: 'Accountant',
    photo: 'https://randomuser.me/api/portraits/women/87.jpg',
    text: 'Voluptate alias quo consequuntur harum velit fugit porro, illo facere commodi, quae animi doloremque dolore repellendus inventore accusantium eum rem.  ',
  },
  {
    name: 'Veeti Seppanen',
    position: 'Director',
    photo: 'https://randomuser.me/api/portraits/men/46.jpg',
    text: 'Officia sunt accusamus libero eveniet consequatur, voluptas natus? Aperiam consectetur ipsum inventore cupiditate totam.',
  },
]
let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if(idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)
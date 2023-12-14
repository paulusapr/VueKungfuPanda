import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import MovieDetail from '../movies/MovieDetail.vue'

const sampleData = {
  title: "Kung Fu Panda",
  year: "2008",
  id: "tt0441773",
  poster: "https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
  director: "Mark Osborne",
  casts: "Jack Black, Jackie Chen",
  genre: "Action, Comedy"
};

describe('Movie Detail', () => {
  it('renders properly', () => {
    const wrapper = mount(MovieDetail, { props: sampleData })
    expect(wrapper.text()).toContain('Kung Fu Panda')
  })
})

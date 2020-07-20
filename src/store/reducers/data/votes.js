import { RESET_VOTES, RESET_VOTE, PUSH_VOTE } from '../../actions/data/votes';

export const initialState = () => ({
  persons: [
    {
      id: 'pope',
      name: 'Pope Francis',
      description: 'Vestibulum diam ante, portittor a odio eged, rhoncus neque. Aenean eu velit libero',
      ago: 'N/A',
      section: 'N/A',
      upVotes: 0,
      downVotes: 0,
      splash: true,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Pope_Francis_Korea_Haemi_Castle_19.jpg/1200px-Pope_Francis_Korea_Haemi_Castle_19.jpg',
      voted: false,
      voteCount: 0,
    },
    {
      id: 'kanye',
      name: 'Kanye West',
      description: 'Vestibulum diam ante, portittor a odio eged, rhoncus neque. Aenean eu velit libero',
      ago: '1 month',
      section: 'Entertainment',
      upVotes: 64,
      downVotes: 36,
      splash: false,
      imageUrl: 'https://los40es00.epimg.net/los40/imagenes/2020/07/16/bigbang/1594908620_526459_1594908737_miniatura_normal.jpg',
      voted: false,
      voteCount: 0,
    },
    {
      id: 'mark',
      name: 'Mark Zuckerberg',
      description: 'Vestibulum diam ante, portittor a odio eged, rhoncus neque. Aenean eu velit libero',
      ago: '1 month',
      section: 'Business',
      upVotes: 36,
      downVotes: 64,
      splash: false,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg',
      voted: true,
      voteCount: 1,
    },
    {
      id: 'cristina',
      name: 'Cristina Fernández de Kirchner',
      description: 'Vestibulum diam ante, portittor a odio eged, rhoncus neque. Aenean eu velit libero',
      ago: '1 month',
      section: 'Politics',
      upVotes: 36,
      downVotes: 64,
      splash: false,
      imageUrl: 'https://www.ecured.cu/images/thumb/0/01/CFK.jpg/1200px-CFK.jpg',
      voted: false,
      voteCount: 0,
    },
    {
      id: 'malala',
      name: 'Malala Yousafzai',
      description: 'Vestibulum diam ante, portittor a odio eged, rhoncus neque. Aenean eu velit libero',
      ago: '1 month',
      section: 'Entertainment',
      upVotes: 64,
      downVotes: 36,
      splash: false,
      imageUrl: 'https://www.thinkingheads.com/wp-content/uploads/2018/11/malala-yousafzai-conferencista.png',
      voted: false,
      voteCount: 0,
    },
  ],
  closingIn: '22 days',
});

export default (state = initialState(), action) => {
  const { type, payload } = action;
  switch (type) {
    case RESET_VOTE: {
      const { id } = payload;
      const persons = [...state.persons];
      const index = persons.findIndex((person) => person.id === id);
      persons[index].voted = false;
      return {
        ...state,
        persons,
      };
    }
    case PUSH_VOTE: {
      const { id, vote } = payload.vote;
      const persons = [...state.persons];
      const index = persons.findIndex((person) => person.id === id);
      persons[index].voted = true;
      if (vote === 'up') {
        persons[index].upVotes += 1;
      } else {
        persons[index].downVotes += 1;
      }
      persons[index].voteCount += 1;
      return {
        ...state,
        persons,
      };
    }
    case RESET_VOTES:
      return initialState();
    default:
      return state;
  }
};

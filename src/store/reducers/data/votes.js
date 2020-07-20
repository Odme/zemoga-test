import { RESET_CROSSFILTER, GET_DATED_DATA, UPDATE_DATED_DATA } from '../../actions/data/votes';

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
    },
  ],
  closingIn: '22 days',
});

export default (state = initialState(), action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_DATED_DATA:
      return {
        ...state,
        records: payload.records,
        totalRecords: payload.records.length || 0,
      };
    case UPDATE_DATED_DATA: {
      const { records } = state;
      const newRecords = [...records, ...payload.records];
      return {
        ...state,
        records: newRecords,
        totalRecords: (state.totalRecords + payload.records.length),
      };
    }
    case RESET_CROSSFILTER:
      return initialState();
    default:
      return state;
  }
};

import { countBy } from 'lodash/fp';
import votesRepository from './../service/repositories/voteRepo';
import { voteOptions } from './../vote-options';
import { firebaseAction } from 'vuexfire';

const emptyOptionsObject = Object.assign({}, ...Array.from(voteOptions, k => ({ [k]: 0 })));
const groupByVoteType = countBy('vote');

const initialState = () => ({
  votes: []
});

const state = initialState;

const getters = {
  groupedVotes: state => ({ ...emptyOptionsObject, ...groupByVoteType(state.votes) }),
  hasUserVoted: (state, getters, rootState, rootGetters) => {
    const currentUserId = rootGetters['user/userID'];
    return state.votes.findIndex(({ userId }) => userId === currentUserId) !== -1;
  },
};

const actions = {
  setVotesRef: firebaseAction(
    async ({ bindFirebaseRef }, ref) => {
      await bindFirebaseRef('votes', ref);
    },
  ),

  initVotesRef({ dispatch }) {
    dispatch('setVotesRef', votesRepository.votesRef);
  },

  resetVotes() {
    votesRepository.resetVotes();
  },

  addVote(state, vote) {
    votesRepository.addVote(vote);
  },
};

export default {
  namespaced: true,
  getters,
  actions,
  state
};

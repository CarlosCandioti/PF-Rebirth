import {
  GET_PETS,
  GET_TYPES,
  GET_DETAILS,
  GET_USER,
  GET_NAMES,
  GET_USER_ID,
  ORDER_BY_AGE,
  FILTER_BY_SIZE,
  FILTER_BY_LOCATION,
  POST_PET,
  POST_USER,
  FILTER_BY_SEX,
  FULL_FILTER_AGE,
  NO_FILTER_PETS,
  FULL_FILTER_SEX,
  FULL_FILTER_LOCATION,
  FULL_FILTER_SIZE,
  MERCADO_PAGO,
  GET_LOCATION,
  LOGIN_USER,
  GET_MESSAGE,
  GET_CHAT,
  POST_MESSAGE,
  SAVE_ADOPTION_ID,
  LOGOUT_USER,
  FAVORITES,
  DELETE_FAVORITES,
  GET_FAVORITES,
  // GET_ALL_PETS, -> warning
  UPDATE_PROFILE,
  RESET_DETAILS,
  RESET_PETS,
  DELETE_USER,
  DELETE_PET,
  USERS_BANNED,
  USER_RESTORE,
  GET_USERNAME,
  MAKE_ADMIN,
  DELETE_ADOPTION,
  DELETE_POST,
  SAVE_ID,
  // DELETE_ADOPTION, -> warning

} from "../Actions/actionTypes";

const initialState = {
  activeUser: null,
  filterSex: "All",
  filterAge: "age",
  filterSize: "Any",
  filterLocation: "All",
  pets: [],
  filteredPets: [],
  detail: [],
  user: [],
  userDetail: [],
  typePet: [],

  location: [],
  message: [],
  adoptionChat: [],
  adoptionId: "",
  favorite: [],
  allPets: [],
  profileView: {},
  petsPrueba: {},
  prueba: [],
  savedName: "",
  userDeleted: [],
  userBanned: [],
  admins: [],
  favoritesSaved : [],
  saveId : "",
  favoritesSaved: [],

};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SAVE_FAVORITES":
      return {
        ...state,
        favoritesSaved: action.payload,
      };
    case "SAVE_NAME":
      return {
        ...state,
        savedName: action.payload,
      };
    case "PAGINATE_DATA":
      return {
        ...state,
        prueba: action.payload,
      };
    case DELETE_POST: 
    return{
      ...state
    }
    case DELETE_PET:
      return {
        ...state,
      };
      case SAVE_ID:{
        return{
          ...state,
          saveId : action.payload
        }
      }
    case "PRUEBA":
      return {
        ...state,
        activeUser: action.payload,
      };
    case GET_USERNAME:
      return {
        ...state,
        user: action.payload,
      };
    case USERS_BANNED:
      return {
        ...state,
        userBanned: action.payload,
      };
    case USER_RESTORE:
      return {
        ...state,
      };
    case LOGIN_USER:
      return {
        ...state,
        activeUser: action.payload,
      };
    case LOGOUT_USER:
      localStorage.clear();
      return {
        ...state,
        activeUser: null,
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        profileView: action.payload,
      };
    case GET_TYPES:
      return {
        ...state,
        typePet: action.payload,
      };

    case GET_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    case POST_MESSAGE:
      return {
        ...state,
      };
    case SAVE_ADOPTION_ID:
      return {
        ...state,
        adoptionId: action.payload,
      };
    case GET_CHAT:
      return {
        ...state,
        adoptionChat: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case MAKE_ADMIN:
      return {
        ...state,
        admins: action.payload,
      };
    case DELETE_USER:
      return {
        ...state,
        userDeleted: action.payload,
      };

    case GET_DETAILS:
      return {
        ...state,
        detail: action.payload,
      };

    case RESET_DETAILS:
      return {
        ...state,
        detail: [],
        allPets: [],
      };
    case RESET_PETS:
      return {
        ...state,
        pets: [],
        filteredPets: [],
      };
    case GET_NAMES:
      return {
        ...state,
        prueba: action.payload,
      };
    case POST_PET:
      return {
        ...state,
      };
    case GET_USER_ID:
      return {
        ...state,
        userDetail: action.payload,
      };

    case POST_USER:
      return {
        ...state,
      };
    case MERCADO_PAGO:
      return {
        ...state,
      };
    case GET_LOCATION:
      return {
        ...state,
        location: action.payload,
      };

    case FAVORITES:
      return {
        ...state,
        favorite: action.payload,
      };
    case DELETE_FAVORITES:
      return {
        ...state,
        favorite: action.payload,
      };
    case GET_FAVORITES:
      return {
        ...state,
        favorite: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;

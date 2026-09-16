/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/config.dev.ts":
/*!******************************!*\
  !*** ./config/config.dev.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst devConfig = {\n    clientUrl: process.env.CLIENT_URL || 'http://localhost:3000',\n    db: {\n        uri: process.env.MONGO_URI || 'mongodb://localhost:27017',\n        options: {\n            user: process.env.MONGO_USERNAME || '',\n            pass: process.env.MONGO_USERNAME || '',\n            dbName: 'dev',\n            keepAlive: true,\n            useNewUrlParser: true,\n            useUnifiedTopology: true,\n            useCreateIndex: true\n        },\n    },\n    jwt: {\n        secret: process.env.JWT_SECRET || 'jwtSecret',\n        expiration: 360000,\n        refreshSecret: process.env.JWT_REFRESH_SECRET || 'jwtRefreshSecret',\n        refreshExpiration: 60 * 60 * 24 * 7,\n    },\n    github: {\n        clientId: process.env.GITHUB_CLIENT_ID || '',\n        clientSecret: process.env.GITHUB_CLIENT_SECRET || '',\n        callbackUrl: process.env.GITHUB_CALLBACK_URL ||\n            'http://localhost:3000/auth/github/callback',\n    },\n};\nexports.default = devConfig;\n\n\n//# sourceURL=webpack:///./config/config.dev.ts?");

/***/ }),

/***/ "./config/config.prod.ts":
/*!*******************************!*\
  !*** ./config/config.prod.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst prodConfig = {\n    clientUrl: process.env.CLIENT_URL || '<client url here>',\n    db: {\n        uri: process.env.MONGO_URI || '<mongodb uri here>',\n        options: {\n            user: process.env.MONGO_USERNAME || '',\n            pass: process.env.MONGO_USERNAME || '',\n            dbName: 'prod',\n            keepAlive: true,\n            useNewUrlParser: true,\n            useUnifiedTopology: true,\n            useCreateIndex: true,\n        },\n    },\n    jwt: {\n        secret: process.env.JWT_SECRET || '<jwt secret here>',\n        expiration: 360000,\n        refreshSecret: process.env.JWT_REFRESH_SECRET || '<jwt refresh secret here>',\n        refreshExpiration: 60 * 60 * 24 * 7,\n    },\n    github: {\n        clientId: process.env.GITHUB_CLIENT_ID || '<github client id here>',\n        clientSecret: process.env.GITHUB_CLIENT_SECRET || '<github client secret here>',\n        callbackUrl: process.env.GITHUB_CALLBACK_URL || '<github callback url here>',\n    },\n};\nexports.default = prodConfig;\n\n\n//# sourceURL=webpack:///./config/config.prod.ts?");

/***/ }),

/***/ "./config/config.ts":
/*!**************************!*\
  !*** ./config/config.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst config_dev_1 = __importDefault(__webpack_require__(/*! ./config.dev */ \"./config/config.dev.ts\"));\nconst config_prod_1 = __importDefault(__webpack_require__(/*! ./config.prod */ \"./config/config.prod.ts\"));\nconst selectedConfiguration =  false\n    ? undefined\n    : config_dev_1.default;\nexports.default = selectedConfiguration;\n\n\n//# sourceURL=webpack:///./config/config.ts?");

/***/ }),

/***/ "./core/auth/cookies.ts":
/*!******************************!*\
  !*** ./core/auth/cookies.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.clearOauthStateCookie = exports.setOauthStateCookie = exports.clearRefreshTokenCookie = exports.setRefreshTokenCookie = exports.OAUTH_STATE_COOKIE = exports.REFRESH_TOKEN_COOKIE = void 0;\nconst config_1 = __importDefault(__webpack_require__(/*! ../../config/config */ \"./config/config.ts\"));\nconst utils_1 = __webpack_require__(/*! ../../utils */ \"./utils.ts\");\nexports.REFRESH_TOKEN_COOKIE = 'refreshToken';\nexports.OAUTH_STATE_COOKIE = 'gh_oauth_state';\nexports.setRefreshTokenCookie = (res, token) => {\n    res.cookie(exports.REFRESH_TOKEN_COOKIE, token, {\n        httpOnly: true,\n        secure: utils_1.isProduction,\n        sameSite: 'lax',\n        maxAge: config_1.default.jwt.refreshExpiration * 1000,\n        path: '/api/auth',\n    });\n};\nexports.clearRefreshTokenCookie = (res) => {\n    res.clearCookie(exports.REFRESH_TOKEN_COOKIE, { path: '/api/auth' });\n};\nexports.setOauthStateCookie = (res, state) => {\n    res.cookie(exports.OAUTH_STATE_COOKIE, state, {\n        httpOnly: true,\n        secure: utils_1.isProduction,\n        sameSite: 'lax',\n        maxAge: 5 * 60 * 1000,\n        path: '/api/auth',\n    });\n};\nexports.clearOauthStateCookie = (res) => {\n    res.clearCookie(exports.OAUTH_STATE_COOKIE, { path: '/api/auth' });\n};\n\n\n//# sourceURL=webpack:///./core/auth/cookies.ts?");

/***/ }),

/***/ "./core/auth/github.ts":
/*!*****************************!*\
  !*** ./core/auth/github.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.fetchPrimaryGithubEmail = exports.fetchGithubProfile = exports.exchangeCodeForToken = exports.buildAuthorizeUrl = exports.generateState = void 0;\nconst axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nconst crypto_1 = __importDefault(__webpack_require__(/*! crypto */ \"crypto\"));\nconst config_1 = __importDefault(__webpack_require__(/*! ../../config/config */ \"./config/config.ts\"));\nconst GITHUB_AUTHORIZE_URL = 'https://github.com/login/oauth/authorize';\nconst GITHUB_TOKEN_URL = 'https://github.com/login/oauth/access_token';\nconst GITHUB_USER_URL = 'https://api.github.com/user';\nconst GITHUB_EMAILS_URL = 'https://api.github.com/user/emails';\nexports.generateState = () => crypto_1.default.randomBytes(16).toString('hex');\nexports.buildAuthorizeUrl = (state) => {\n    const params = new URLSearchParams({\n        client_id: config_1.default.github.clientId,\n        redirect_uri: config_1.default.github.callbackUrl,\n        scope: 'read:user user:email',\n        state,\n        allow_signup: 'true',\n    });\n    return `${GITHUB_AUTHORIZE_URL}?${params.toString()}`;\n};\nexports.exchangeCodeForToken = (code) => __awaiter(void 0, void 0, void 0, function* () {\n    const { data } = yield axios_1.default.post(GITHUB_TOKEN_URL, {\n        client_id: config_1.default.github.clientId,\n        client_secret: config_1.default.github.clientSecret,\n        code,\n        redirect_uri: config_1.default.github.callbackUrl,\n    }, { headers: { Accept: 'application/json' } });\n    if (!data.access_token) {\n        throw new Error(data.error_description || 'failed to obtain github access token');\n    }\n    return data.access_token;\n});\nexports.fetchGithubProfile = (githubAccessToken) => __awaiter(void 0, void 0, void 0, function* () {\n    const { data } = yield axios_1.default.get(GITHUB_USER_URL, {\n        headers: { Authorization: `token ${githubAccessToken}` },\n    });\n    return data;\n});\nexports.fetchPrimaryGithubEmail = (githubAccessToken) => __awaiter(void 0, void 0, void 0, function* () {\n    const { data } = yield axios_1.default.get(GITHUB_EMAILS_URL, {\n        headers: { Authorization: `token ${githubAccessToken}` },\n    });\n    const primary = data.find((e) => e.primary && e.verified) || data.find((e) => e.verified);\n    return primary === null || primary === void 0 ? void 0 : primary.email;\n});\n\n\n//# sourceURL=webpack:///./core/auth/github.ts?");

/***/ }),

/***/ "./core/auth/strategies/local.ts":
/*!***************************************!*\
  !*** ./core/auth/strategies/local.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst passport_1 = __importDefault(__webpack_require__(/*! passport */ \"passport\"));\nconst passport_local_1 = __importDefault(__webpack_require__(/*! passport-local */ \"passport-local\"));\nconst user_1 = __importDefault(__webpack_require__(/*! ../../../models/user */ \"./models/user.ts\"));\nconst LocalStrategy = passport_local_1.default.Strategy;\npassport_1.default.use(new LocalStrategy({ usernameField: 'username' }, (username, password, done) => {\n    user_1.default.findOne({ username: username.toLowerCase() }, (err, user) => {\n        if (err) {\n            return done(err);\n        }\n        if (!user) {\n            return done(undefined, false, {\n                message: `username ${username} not found.`,\n            });\n        }\n        user.comparePassword(password, (err, isMatch) => {\n            if (err) {\n                return done(err);\n            }\n            if (isMatch) {\n                return done(undefined, user);\n            }\n            return done(undefined, false, {\n                message: 'Invalid username or password.',\n            });\n        });\n    });\n}));\n\n\n//# sourceURL=webpack:///./core/auth/strategies/local.ts?");

/***/ }),

/***/ "./core/auth/tokens.ts":
/*!*****************************!*\
  !*** ./core/auth/tokens.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.generateRefreshToken = exports.generateAccessToken = void 0;\nconst jwt = __importStar(__webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\"));\nconst config_1 = __importDefault(__webpack_require__(/*! ../../config/config */ \"./config/config.ts\"));\nexports.generateAccessToken = (user) => jwt.sign({ username: user.username }, config_1.default.jwt.secret, {\n    expiresIn: config_1.default.jwt.expiration,\n});\nexports.generateRefreshToken = (user) => jwt.sign({ username: user.username }, config_1.default.jwt.refreshSecret, {\n    expiresIn: config_1.default.jwt.refreshExpiration,\n});\n\n\n//# sourceURL=webpack:///./core/auth/tokens.ts?");

/***/ }),

/***/ "./core/init.ts":
/*!**********************!*\
  !*** ./core/init.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.initAuth = exports.initMongoose = exports.initMiddleware = void 0;\nconst body_parser_1 = __importDefault(__webpack_require__(/*! body-parser */ \"body-parser\"));\nconst cookie_parser_1 = __importDefault(__webpack_require__(/*! cookie-parser */ \"cookie-parser\"));\nconst cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nconst passport_1 = __importDefault(__webpack_require__(/*! passport */ \"passport\"));\nconst config_1 = __importDefault(__webpack_require__(/*! ../config/config */ \"./config/config.ts\"));\nconst utils_1 = __webpack_require__(/*! ../utils */ \"./utils.ts\");\nexports.initMiddleware = (app) => {\n    app.use(cors_1.default({ origin: config_1.default.clientUrl, credentials: true }));\n    app.use(cookie_parser_1.default());\n    app.use(body_parser_1.default.json());\n    app.use(body_parser_1.default.urlencoded({ extended: false }));\n};\nexports.initMongoose = () => {\n    mongoose_1.default.connect(config_1.default.db.uri, config_1.default.db.options, (err) => {\n        if (err) {\n            console.log('could not connect to mongodb');\n        }\n        mongoose_1.default.set('debug', !utils_1.isProduction);\n    });\n};\nexports.initAuth = (app) => {\n    app.use(passport_1.default.initialize());\n};\n\n\n//# sourceURL=webpack:///./core/init.ts?");

/***/ }),

/***/ "./models/user.ts":
/*!************************!*\
  !*** ./models/user.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst bcryptjs_1 = __importDefault(__webpack_require__(/*! bcryptjs */ \"bcryptjs\"));\nconst userSchema = new mongoose_1.Schema({\n    username: {\n        type: String,\n        required: true,\n        unique: true,\n    },\n    password: {\n        type: String,\n    },\n    email: {\n        type: String,\n        unique: true,\n        sparse: true,\n    },\n    githubId: {\n        type: String,\n        unique: true,\n        sparse: true,\n    },\n    authProvider: {\n        type: String,\n        enum: ['local', 'github'],\n        default: 'local',\n    },\n    date: {\n        type: Date,\n        default: Date.now,\n    },\n});\nuserSchema.pre('save', function save(next) {\n    const user = this;\n    if (!user.isModified('password') || !user.password) {\n        return next();\n    }\n    bcryptjs_1.default.genSalt(10, (err, salt) => {\n        if (err) {\n            return next(err);\n        }\n        bcryptjs_1.default.hash(this.password, salt, (err, hash) => {\n            if (err) {\n                return next(err);\n            }\n            user.password = hash;\n            next();\n        });\n    });\n});\nuserSchema.methods.comparePassword = function (candidatePassword, callback) {\n    bcryptjs_1.default.compare(candidatePassword, this.password, (err, isMatch) => {\n        callback(err, isMatch);\n    });\n};\nconst User = mongoose_1.model('User', userSchema);\nexports.default = User;\n\n\n//# sourceURL=webpack:///./models/user.ts?");

/***/ }),

/***/ "./routes/auth.ts":
/*!************************!*\
  !*** ./routes/auth.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst express_1 = __webpack_require__(/*! express */ \"express\");\nconst express_validator_1 = __webpack_require__(/*! express-validator */ \"express-validator\");\nconst http_status_codes_1 = __importDefault(__webpack_require__(/*! http-status-codes */ \"http-status-codes\"));\nconst passport_1 = __importDefault(__webpack_require__(/*! passport */ \"passport\"));\n__webpack_require__(/*! ../core/auth/strategies/local */ \"./core/auth/strategies/local.ts\");\nconst jwt = __importStar(__webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\"));\nconst config_1 = __importDefault(__webpack_require__(/*! ../config/config */ \"./config/config.ts\"));\nconst cookies_1 = __webpack_require__(/*! ../core/auth/cookies */ \"./core/auth/cookies.ts\");\nconst github_1 = __webpack_require__(/*! ../core/auth/github */ \"./core/auth/github.ts\");\nconst tokens_1 = __webpack_require__(/*! ../core/auth/tokens */ \"./core/auth/tokens.ts\");\nconst user_1 = __importDefault(__webpack_require__(/*! ../models/user */ \"./models/user.ts\"));\nconst router = express_1.Router();\n// @route   POST api/auth/local\n// @desc    Login with local user\n// @access  Public\nrouter.post('/local', [\n    express_validator_1.check('username', 'Username is required').exists(),\n    express_validator_1.check('password', 'Password is required').exists(),\n], (req, res, next) => {\n    const errors = express_validator_1.validationResult(req);\n    if (!errors.isEmpty()) {\n        return res\n            .status(http_status_codes_1.default.BAD_REQUEST)\n            .json({ errors: errors.array() });\n    }\n    passport_1.default.authenticate('local', (err, user, info) => {\n        if (!user || err) {\n            return res.status(http_status_codes_1.default.UNAUTHORIZED).send();\n        }\n        const token = jwt.sign({ username: user.username }, config_1.default.jwt.secret);\n        return res.status(http_status_codes_1.default.OK).send({ token: token });\n    })(req, res, next);\n});\n// @route   GET api/auth/github\n// @desc    Get the GitHub authorize redirect url, and stash an anti-CSRF\n//          state value in an httpOnly cookie for later validation\n// @access  Public\nrouter.get('/github', (_req, res) => {\n    const state = github_1.generateState();\n    cookies_1.setOauthStateCookie(res, state);\n    return res.status(http_status_codes_1.default.OK).json({ url: github_1.buildAuthorizeUrl(state) });\n});\n// @route   POST api/auth/github/callback\n// @desc    Exchange the code the client received from GitHub for a GitHub\n//          access token, fetch the GitHub profile/email, upsert the local\n//          user and mint our own access + refresh tokens\n// @access  Public\nrouter.post('/github/callback', [\n    express_validator_1.check('code', 'code is required').exists(),\n    express_validator_1.check('state', 'state is required').exists(),\n], (req, res) => __awaiter(void 0, void 0, void 0, function* () {\n    var _a;\n    const errors = express_validator_1.validationResult(req);\n    if (!errors.isEmpty()) {\n        return res\n            .status(http_status_codes_1.default.BAD_REQUEST)\n            .json({ errors: errors.array() });\n    }\n    const { code, state } = req.body;\n    const cookieState = (_a = req.cookies) === null || _a === void 0 ? void 0 : _a[cookies_1.OAUTH_STATE_COOKIE];\n    cookies_1.clearOauthStateCookie(res);\n    if (!cookieState || cookieState !== state) {\n        return res\n            .status(http_status_codes_1.default.UNAUTHORIZED)\n            .json({ message: 'invalid or expired oauth state' });\n    }\n    try {\n        const githubAccessToken = yield github_1.exchangeCodeForToken(code);\n        const profile = yield github_1.fetchGithubProfile(githubAccessToken);\n        const email = profile.email || (yield github_1.fetchPrimaryGithubEmail(githubAccessToken));\n        const githubId = String(profile.id);\n        let user = yield user_1.default.findOne({ githubId });\n        if (!user) {\n            user = yield user_1.default.create({\n                username: `github_${profile.login}`.toLowerCase(),\n                githubId,\n                email,\n                authProvider: 'github',\n            });\n        }\n        const accessToken = tokens_1.generateAccessToken(user);\n        const refreshToken = tokens_1.generateRefreshToken(user);\n        cookies_1.setRefreshTokenCookie(res, refreshToken);\n        return res.status(http_status_codes_1.default.OK).json({\n            accessToken,\n            user: { username: user.username, email: user.email },\n        });\n    }\n    catch (err) {\n        console.log(err);\n        return res.status(http_status_codes_1.default.UNAUTHORIZED).send();\n    }\n}));\n// @route   POST api/auth/refresh\n// @desc    Mint a new access token from the refresh token cookie\n// @access  Public (requires valid refresh token cookie)\nrouter.post('/refresh', (req, res) => {\n    var _a;\n    const refreshToken = (_a = req.cookies) === null || _a === void 0 ? void 0 : _a[cookies_1.REFRESH_TOKEN_COOKIE];\n    if (!refreshToken) {\n        return res.status(http_status_codes_1.default.UNAUTHORIZED).send();\n    }\n    jwt.verify(refreshToken, config_1.default.jwt.refreshSecret, (err, payload) => __awaiter(void 0, void 0, void 0, function* () {\n        if (err) {\n            return res.status(http_status_codes_1.default.UNAUTHORIZED).send();\n        }\n        const user = yield user_1.default.findOne({ username: payload.username });\n        if (!user) {\n            return res.status(http_status_codes_1.default.UNAUTHORIZED).send();\n        }\n        const accessToken = tokens_1.generateAccessToken(user);\n        return res.status(http_status_codes_1.default.OK).json({ accessToken });\n    }));\n});\n// @route   POST api/auth/logout\n// @desc    Clear the refresh token cookie\n// @access  Public\nrouter.post('/logout', (_req, res) => {\n    cookies_1.clearRefreshTokenCookie(res);\n    return res.status(http_status_codes_1.default.OK).send();\n});\nexports.default = router;\n\n\n//# sourceURL=webpack:///./routes/auth.ts?");

/***/ }),

/***/ "./routes/user.ts":
/*!************************!*\
  !*** ./routes/user.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst express_1 = __webpack_require__(/*! express */ \"express\");\nconst express_validator_1 = __webpack_require__(/*! express-validator */ \"express-validator\");\nconst http_status_codes_1 = __importDefault(__webpack_require__(/*! http-status-codes */ \"http-status-codes\"));\n__webpack_require__(/*! ../core/auth/strategies/local */ \"./core/auth/strategies/local.ts\");\nconst user_1 = __importDefault(__webpack_require__(/*! ../models/user */ \"./models/user.ts\"));\nconst jwt = __importStar(__webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\"));\nconst config_1 = __importDefault(__webpack_require__(/*! ../config/config */ \"./config/config.ts\"));\nconst router = express_1.Router();\n// @route   POST api/user/local\n// @desc    Register new user\n// @access  Public\nrouter.post('/register', [\n    express_validator_1.check('username', 'Username is required').exists(),\n    express_validator_1.check('password', 'Password is required').exists(),\n], (req, res) => __awaiter(void 0, void 0, void 0, function* () {\n    const errors = express_validator_1.validationResult(req);\n    if (!errors.isEmpty()) {\n        return res\n            .status(http_status_codes_1.default.BAD_REQUEST)\n            .json({ errors: errors.array() });\n    }\n    try {\n        yield user_1.default.create({\n            username: req.body.username,\n            password: req.body.password,\n        });\n        const token = jwt.sign({ username: req.body.username, scope: req.body.scope }, config_1.default.jwt.secret);\n        return res.status(http_status_codes_1.default.OK).send({ token: token });\n    }\n    catch (err) {\n        return res.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR).send();\n    }\n}));\nexports.default = router;\n\n\n//# sourceURL=webpack:///./routes/user.ts?");

/***/ }),

/***/ "./server.ts":
/*!*******************!*\
  !*** ./server.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst init_1 = __webpack_require__(/*! ./core/init */ \"./core/init.ts\");\nconst auth_1 = __importDefault(__webpack_require__(/*! ./routes/auth */ \"./routes/auth.ts\"));\nconst user_1 = __importDefault(__webpack_require__(/*! ./routes/user */ \"./routes/user.ts\"));\nconst app = express_1.default();\nconst PORT = 8000;\ninit_1.initMongoose();\ninit_1.initMiddleware(app);\ninit_1.initAuth(app);\napp.get('/', (_req, res) => {\n    res.send({\n        message: 'API running',\n    });\n});\napp.use('/api/auth', auth_1.default);\napp.use('/api/user', user_1.default);\napp.listen(PORT, () => {\n    console.log('server started at http://localhost:' + PORT);\n});\n\n\n//# sourceURL=webpack:///./server.ts?");

/***/ }),

/***/ "./utils.ts":
/*!******************!*\
  !*** ./utils.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.isProduction = void 0;\nexports.isProduction = \"development\" === 'production';\n\n\n//# sourceURL=webpack:///./utils.ts?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcryptjs\");\n\n//# sourceURL=webpack:///external_%22bcryptjs%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-validator":
/*!************************************!*\
  !*** external "express-validator" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-validator\");\n\n//# sourceURL=webpack:///external_%22express-validator%22?");

/***/ }),

/***/ "http-status-codes":
/*!************************************!*\
  !*** external "http-status-codes" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http-status-codes\");\n\n//# sourceURL=webpack:///external_%22http-status-codes%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-local\");\n\n//# sourceURL=webpack:///external_%22passport-local%22?");

/***/ })

/******/ });
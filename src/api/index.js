import Requests from "./requests";

const checkEmail = async (email) => {
    var results = await Requests.verifyEmail(email)
    if (results.status === 200) {
        return { data: null, error: null }
    }
    if (results.status === 302) {
        return { data: results?.data, error: null }
    }
    return { data: null, error: results?.error }
}

const createAccount = async (body) => {
    var results = await Requests.createAccount(body)
    if (results.status === 302) {
        return { data: null, error: results?.data }
    }
    if (results.status === 201) {
        return { data: results?.data, error: null }
    }
    return { data: null, error: results?.error }
}

const createOrder = async (email) => {
    var results = await Requests.createOrder(email)
    // console.log(results);
    if (results.status === 201) {
        return { data: results?.data, error: null }
    }
    if (results.status === 302) {
        return { data: results?.data, error: null }
    }
    return { data: null, error: results?.error }
}

const verifyOrder = async (body) => {
    var results = await Requests.verifyOrder(body)
    if (results.status === 200) {
        return { data: results?.data, error: null }
    }
    return { data: null, error: results?.error }
}

const getPayment = async (email) => {
    var results = await Requests.getPayment(email)
    if (results.status === 302) {
        return { data: results?.data, error: null }
    }
    return { data: null, error: results?.error }
}

const Backend = { checkEmail, createAccount, createOrder, verifyOrder, getPayment }
export default Backend
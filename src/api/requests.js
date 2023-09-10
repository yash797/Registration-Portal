const backend_url = process.env.REACT_APP_API_URL

function responseWrapper(ok, status, data, error = null) {
    return { ok: ok || false, status: status || 404, data: data || {}, error: error || {} }
}

async function apiCall(route, method, body) {
    let options = (method === 'GET' ? { method } : { method, "body": JSON.stringify(body), "headers": { 'Content-Type': 'application/json' } })
    return fetch(backend_url + route, options)
        .then(response => {
            if (!(response?.status >= 200 && response?.status < 400)) throw response
            return response
        })
        .then(async response => {
            var { ok, status, statusText } = response
            var data = await response.json()
            return responseWrapper(ok || false, status || 404, data || data?.data, data?.error || statusText)
        })
        .catch(err => (responseWrapper(false, err?.status, err?.body || err || {}, err?.statusText || err)))
}

const verifyEmail = async (email) => {
    try {
        var results = await apiCall("/register/verify", "POST", { "email": email })
        return results
    } catch (err) {
        return responseWrapper(false, 404, err?.data || {}, err)
    }
}

const createAccount = async (body) => {
    try {
        var results = await apiCall("/register", "POST", body)
        return results
    } catch (err) {
        return responseWrapper(false, 404, err?.data || {}, err)
    }
}

const createOrder = async (email) => {
    try {
        var results = await apiCall("/register/create-order", "POST", { "email": email })
        return results
    } catch (err) {
        return responseWrapper(false, 404, err?.data || {}, err)
    }
}

const verifyOrder = async (body) => {
    try {
        var results = await apiCall("/register/verify-order", "POST", body)
        return results
    } catch (err) {
        return responseWrapper(false, 404, err?.data || {}, err)
    }
}

const getPayment = async (email) => {
    try {
        var results = await apiCall(`/success?id=${email}`, "GET")
        return results
    } catch (err) {
        return responseWrapper(false, 404, err?.data || {}, err)
    }
}

const Requests = {
    verifyEmail,
    createAccount,
    createOrder,
    verifyOrder,
    getPayment,
}

export default Requests
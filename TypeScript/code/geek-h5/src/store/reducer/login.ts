// reducer 根据输入的action的类型和传递的参数，返回特定结果
import type { Token } from '@/types/data'
import type { LoginActionType } from '@/types/store'
const initialState: Token = {
    token: '',
    refresh_token: ''
}

// LoginState的类型就是Token，
function LoginReducer(prevState = initialState, action: LoginActionType ): Token{
    return prevState
}

export default LoginReducer
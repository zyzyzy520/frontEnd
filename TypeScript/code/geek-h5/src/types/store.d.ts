// 定义redux中 action的类型
import type { rootState } from "@/store";

type RootAction = unknown;

// 声明异步action
export type RootThunkAction = ThunkAction<void, RootState, unknown, RootAction>
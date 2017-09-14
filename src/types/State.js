// @flow
import type {Reducers} from "../reducer"

type $ExtractFunctionReturn = <V>(v:(...args:any) => V) => V

export type State = $ObjMap<Reducers,$ExtractFunctionReturn>

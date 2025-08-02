import { useContext } from "react";
import { Shopping } from "./jsx/shopingcontext";
import { Navigate } from "react-router";

export default function ProtectedRoute({ children }) {
    const {isauth} = useContext(Shopping)
    if (!isauth) {
        return <Navigate to="/login" />
    }
    return children;
}
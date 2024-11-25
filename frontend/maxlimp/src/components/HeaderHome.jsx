import React, { useEffect, useMemo } from "react";

import useSWR from "swr";
import logo from "../assets/logo.png";
import AuthButtons from "./AuthButtons";
import SearchInput from "./SearchInput";

import UserBox from "./UserBox";

import SubHeaderHome from "./SubHeaderHome";
import { useAuth } from "../contexts/AuthProvider";
import { useCart } from "../contexts/CartContext";
import { getFetcher } from "../services/data";
import CartIcon from "./CartIcon";
import useAuthRedirect from "../hooks/useAuthRedirect";

function HeaderHome({ showSearch = true }) {
  useAuthRedirect("/", "/", false);
  const { cart } = useCart();

  const { user } = useAuth();

  if (!user) return null;

  return (
    <header className="px-4 md:px-12 bg-indigo-50 flex flex-col items-start justify-center">
      <div className="flex py-6 w-full justify-between items-center gap-4 md:gap-12">
        <img src={logo} alt="Maxlimp logo" className="h-12 w-12" />
        {showSearch && <SearchInput />}

        {/* Expand SearchInput */}
        {user ? (
          <div className="flex items-center gap-4 md:gap-8">
            <CartIcon />
            <UserBox user={user} />
          </div>
        ) : (
          <AuthButtons />
        )}
      </div>
      <SubHeaderHome user={user} />
    </header>
  );
}

export default HeaderHome;

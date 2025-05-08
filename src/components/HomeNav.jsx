import React from "react";
import { GiPerpendicularRings } from "react-icons/gi";
import Toni from "../assets/toni.png";
import { Input } from "../components/ui/input";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Label } from "../components/ui/label";
import { Button, buttonVariants } from "../components/ui/button";
import { CgPassword } from "react-icons/cg";

const HomeNav = () => {
  return (
    <div className=" py-4 px-10 flex justify-between items-center">
      <Link to="/" className="flex">
        <p className="text-xl text-[#F5EEDC] font-bold">
          <span className="font-extrabold text-2xl">N</span>ote
        </p>
        <GiPerpendicularRings className="text-blue-300 w-8 h-8 " />
      </Link>

      <div className="flex items-center gap-12 text-[#F5EEDC]">
        <Link to="/" className="hover:underline  duration-300 glow-text">
          Home
        </Link>
        <Link to="/About" className="hover:underline  duration-300 glow-text">
          About
        </Link>
        <Link to="/Features" className="hover:underline  duration-300 glow-text">
          Features
        </Link>
      </div>

      <div className="flex items-center gap-4 text-[#F5EEDC]">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className={buttonVariants({class:"btn btn-ghost hover:bg-[#F5EEDC] font-bold"})}>Log In</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Sign In</DialogTitle>
              <DialogDescription>
               Enter your credentials to access account.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value="User" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="password" className="text-right">
                  Password
                </Label>
                <Input id="password" value="*********" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Link to="/Dashboard"><Button type="submit">Login</Button></Link>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <p className="btn btn-ghost text-black bg-blue-200 font-bold">Sign Up</p>
      </div>
    </div>
  );
};

export default HomeNav;

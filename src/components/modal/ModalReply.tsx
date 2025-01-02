import { useEffect } from "react";
import PostEditor from "../userPanel/PostEditor";
import { PostsResponse } from "../../lib/types";
import Avatar from "../ui/Avatar";
import NickName from "../userPanel/NickName";
import { NavLink } from "react-router-dom";
import Timestamp from "../ui/Timestamp";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: PostsResponse;
}

export function ModalReply({ isOpen, onClose, post }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-tertiary-300 bg-opacity-25 p-5 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-lg bg-tertiary-500 p-2.5 text-center text-sm text-tertiary-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-2.5 p-2.5">
          <div className="flex items-center justify-between gap-2.5">
            <NavLink
              to={`/profile/${post.author.name}`}
              className="group flex items-center gap-2.5"
            >
              <div className="max-w-[50px]">
                <Avatar
                  src={post.author.avatar.url}
                  alt={post.author.name}
                  indicator={false}
                />
              </div>
              <NickName nickname={post.author.name} />
            </NavLink>
            <Timestamp created={post.created} />
          </div>
          <div>
            <p className="py-2.5 text-left text-sm text-tertiary-200">
              {post.body}
            </p>
          </div>

          <div className="flex items-center justify-between border-t border-tertiary-200/50"></div>
        </div>
        <PostEditor
          onCloseModal={onClose}
          rows={6}
          isReply={true}
          replyId={post.id}
        />
      </div>
    </div>
  );
}

"use client";

import { useState, useRef, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";

export default function VideoPlayer({}) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div>
      <button
        className="flex justify-center items-center md:mt-40 bg-black  focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded-3xl group"
        onClick={() => {
          setModalOpen(true);
        }}
        aria-label="Watch the video"
      >
        <Image
          src="/player.png"
          width={100}
          height={100}
          alt="/"
          className="absolute"
          onClick={() => {
            setModalOpen(true);
          }}
        />
      </button>

      <Transition
        show={modalOpen}
        as={Fragment}
        afterEnter={() => videoRef.current?.play()}
      >
        <Dialog initialFocus={videoRef} onClose={() => setModalOpen(false)}>
          <Transition.Child
            className="fixed inset-0 z-10 bg-black bg-opacity-50 transition-opacity"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            aria-hidden="true"
          />
          <Transition.Child
            className="fixed inset-0 z-10 flex p-6"
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 scale-75"
            enterTo="opacity-100 scale-100"
            leave="transition ease-out duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-75"
          >
            <div className="max-w-5xl mx-auto h-full flex items-center">
              <Dialog.Panel className="w-full max-h-full rounded-3xl shadow-2xl aspect-video bg-black overflow-hidden">
                <video ref={videoRef} width={1920} height={1080} loop controls>
                  <source src="/video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  );
}

import React from "react";

const Footer = () => {
  return (
    <footer className="justify-self-end pt-16 pb-8 lg:pt-24 lg:pb-10">
      <div className="px-4 mx-auto max-w-7xl lg:px-4">
        <div className="grid gap-12 lg:grid-cols-6 lg:gap-18">
          <div className="col-span-2">
            <a className="flex mb-6" href="/">
              {/* <span style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;">
                <span style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;">
                  <img
                    style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;"
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2733%27/%3e"
                  />
                </span>
                <img
                  alt="Flowbite Logo"
                  src="/images/logo.svg"
                  decoding="async"
                  data-nimg="intrinsic"
                  style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: medium; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"
                  srcset="/images/logo.svg 1x, /images/logo.svg 2x"
                />
              </span> */}
              <span className="self-center ml-3 text-2xl font-semibold text-gray-900 dark:text-white">
                Flowbite
              </span>
            </a>
            <p className="text-gray-600 dark:text-gray-400">
              Flowbite is an ecosystem built on top of Tailwind CSS including a
              component library, block sections, a Figma design system and other
              resources.
            </p>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">
              Resources
            </h3>
            <ul>
              <li className="mb-4">
                <a
                  href="https://flowbite.com/docs/getting-started/introduction/"
                  className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                >
                  Documentation
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                  href="/blocks/"
                >
                  Flowbite Blocks
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                  href="/icons/"
                >
                  Flowbite Icons
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                  href="/figma/"
                >
                  Flowbite Figma
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                  href="https://chat.openai.com/g/g-y7yC35HB9-flowbite-gpt"
                >
                  Flowbite GPT
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                  href="/pro/"
                >
                  Pro version
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">
              Help &amp; support
            </h3>
            <ul>
              <li className="mb-4">
                <a
                  className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                  href="/contact/"
                >
                  Contact us
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                  href="/dashboard/support/"
                >
                  Support center
                </a>
              </li>
              <li className="mb-4 flex items-center">
                <a
                  className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                  href="/work-with-us/"
                >
                  Hire us
                </a>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-2">
                  New
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">
              Follow us
            </h3>
            <ul>
              <li className="mb-4">
                <a
                  href="https://discord.gg/4eeurUVvTy"
                  rel="noreferrer nofollow"
                  className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                >
                  Discord
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://github.com/themesberg"
                  rel="noreferrer nofollow"
                  className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                >
                  Github
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://twitter.com/zoltanszogyenyi"
                  rel="noreferrer nofollow"
                  className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">
              Legal
            </h3>
            <ul>
              <li className="mb-4">
                <a
                  className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                  href="/license/"
                >
                  License (EULA)
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                  href="/privacy-policy/"
                >
                  Privacy policy
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                  href="/terms-and-conditions/"
                >
                  Terms &amp; conditions
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                  href="/brand/"
                >
                  Brand guideline
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-8 border-gray-200 dark:border-gray-700 lg:my-12" />
        <span className="block font-normal text-center text-gray-600 dark:text-gray-400">
          © 2019-2024 Flowbite™ is a registered trademark. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;

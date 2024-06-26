import {
  ArrowNarrowRightIcon,
  CodeIcon,
  DocumentTextIcon,
} from '@heroicons/react/solid';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <div className="max-w-xl mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
      <div className="rounded-md">
        <Link href="/documentation/getting-started">
          <DocumentTextIcon className="h-5" />
          <span className="px-1 md:px-2">Documentation</span>
          <ArrowNarrowRightIcon className="h-4" />
        </Link>
      </div>
      <div className="relative mt-3 rounded-md sm:mt-0 sm:ml-3">
        <Link href="https://github.com/conceptadev/rockets" target="_blank">
          <CodeIcon className="h-5" />
          <span className="px-1 md:px-2">Source Code</span>
          <ArrowNarrowRightIcon className="h-4" />
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;

import Image from "next/image";

const customers = [
  {
    name: "Go Mobile Tires",
    src: "/logos/gomobiletires.png",
    width: 180,
    height: 50,
    className: "h-8 w-auto sm:h-10",
  },
  {
    name: "Walmart",
    src: "/logos/Walmart_logo_(2025;_Stacked_alt).svg",
    width: 120,
    height: 86,
    className: "h-9 w-auto sm:h-11",
  },
  {
    name: "Lowe's",
    src: "/logos/Lowes_Companies_Logo.svg",
    width: 140,
    height: 66,
    className: "h-7 w-auto sm:h-9",
  },
];

export function CustomerLogos() {
  return (
    <section
      id="trusted"
      className="border-y border-line bg-background px-4 py-10 sm:px-6 sm:py-12 lg:px-8"
    >
      <p className="text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-light sm:text-[11px] sm:tracking-[0.24em]">
        Trusted by
      </p>

      <div className="mx-auto mt-7 flex max-w-5xl flex-col items-center justify-center gap-8 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-x-12 sm:gap-y-6 lg:gap-x-16">
        {customers.map((customer) => (
          <Image
            key={customer.name}
            src={customer.src}
            alt={`${customer.name} logo`}
            width={customer.width}
            height={customer.height}
            className={`object-contain opacity-70 transition-opacity duration-300 hover:opacity-100 ${customer.className}`}
          />
        ))}
      </div>
    </section>
  );
}

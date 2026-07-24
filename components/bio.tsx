/** Intro paragraph. Kept as its own component because of the inline markup. */
export function Bio() {
  return (
    <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
      I build the invisible half of the app, the part every app relies on and
      nobody screenshots. <br />
      Most of what I do lives behind the API, and lately it&apos;s been real-time
      and in an unusual place:{" "}
      <span className="font-bold">The Maritime Industry.</span> <br />I
      architected an IoT platform that ingests per-second engine and location
      data from vessels, wired over Redis, RabbitMQ, and ZeroMQ. When the
      pipeline started crashing under load, I rebuilt how it wrote to the
      database with indexed geo-queries, batched writes, and a throttled feed.
      Constant out-of-memory crashes became zero downtime.
      <br /> I can go end-to-end when a feature calls for it, then hand it off
      and return to where I&apos;m strongest: under the hood.
    </p>
  );
}

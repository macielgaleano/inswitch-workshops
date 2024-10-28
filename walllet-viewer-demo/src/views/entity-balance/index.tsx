const getImageUrl = (person: { name: string; imageId: string }) =>
  `https://i.imgur.com/${person.imageId}.jpg`;

function Avatar({
  person,
  size,
}: {
  person: { name: string; imageId: string };
  size: number;
}) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

const persons = [
  {
    name: "Katsuko Saruhashi",
    imageId: "YfeOqp2",
  },
  {
    name: "Aklilu Lemma",
    imageId: "OKS67lh",
  },
  {
    name: "Lin Lanying",
    imageId: "1bX5QH6",
  },
];

export default function Profile() {
  return (
    <div>
      <h1>Científicos increíbles</h1>
      {persons.map((person) => (
        <Avatar key={person.name} person={person} size={100} />
      ))}
    </div>
  );
}

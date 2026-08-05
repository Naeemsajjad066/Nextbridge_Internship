import TableRow from "./TableRow";

function UserTable({ users }) {
  return (
    <section className="bg-white rounded-lg shadow p-4 sm:p-6">
      <h2 className="text-xl font-semibold mb-4">
        Users
      </h2>

      {/* overflow-x-auto lets the table scroll horizontally on small screens */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse min-w-90">
          <thead>
            <tr className="border-b">
              <th className="text-left px-4 py-2">Name</th>
              <th className="text-left px-4 py-2">Role</th>
              <th className="text-left px-4 py-2">Status</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <TableRow
                key={user.id}
                user={user}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default UserTable;
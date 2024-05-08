import { ICertification } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

export const CertCard: FC<ICertification> = ({
  id,
  name,
  organization,
  issueDate,
  expireDate,
  credentialId,
  credentialUrl,
}) => {
  return (
    <Link
      href={credentialUrl}
      target="_blank"
      className="flex flex-col bg-background-100 rounded-xl p-5"
    >
      <span>{name}</span>
      <span>{organization}</span>
      <div className="text-xs">
        <span>Issued {formatDate(issueDate)}</span>
        {expireDate ? <span> - Expires {formatDate(expireDate)}</span> : null}
      </div>
      {credentialId ? <small className="text-xs">Credential Id: {credentialId}</small> : null}
    </Link>
  );
};

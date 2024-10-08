# Copyright © 2019 Province of British Columbia
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""Tests to verify the meta information endpoint.

Test-Suite to ensure that the /meta endpoint is working as expected.
"""
from http import HTTPStatus


def test_meta_info_v1(session, client, jwt):
    """Assert that the meta information request returns a 200 OK status."""
    # no setup

    # test
    rv = client.get("/meta/info")
    # check
    assert rv.status_code == HTTPStatus.OK
